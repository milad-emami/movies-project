import { Input, AutoComplete, Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect, isValidElement } from "react";
import classes from "./Search.module.scss";
import useDebounce from "../../hooks/useDebounce";

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: "right",
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title, id, label) => ({
  value: String(id),
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {title}
      <span>{label}</span>
    </div>
  ),
});

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then((r) => r.json())
        .then((data) => setSearchItems(data.results));
    }
  }, [debouncedQuery]);

  function makeOption() {
    if (searchItems.length && query) {
      return [
        {
          label: renderTitle("Movies"),
          options: searchItems
            .filter((item) => item.media_type === "movie")
            .map((i) =>
              renderItem(
                i.title,
                i.id,
                <Rate
                  style={{ fontSize: 10 }}
                  allowHalf
                  value={i.vote_average / 2}
                />
              )
            ),
        },
        {
          label: renderTitle("Tv Shows"),
          options: searchItems
            .filter((item) => item.media_type === "tv")
            .map((i) =>
              renderItem(
                i.name,
                i.id,
                <Rate
                  style={{ fontSize: 10 }}
                  allowHalf
                  value={i.vote_average / 2}
                />
              )
            ),
        },
        {
          label: renderTitle("People"),
          options: searchItems
            .filter((item) => item.media_type === "person")
            .map((i) =>
              renderItem(
                i.name,
                i.id,
                <Avatar
                  {...(i.profile_path
                    ? {
                        src: `https://image.tmdb.org/t/p/w45/${i.profile_path}`,
                      }
                    : { icon: <UserOutlined /> })}
                />
              )
            ),
        },
      ];
    }
  }

  return (
    <div className={classes.root}>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        options={makeOption()}
        onSearch={(e) => setQuery(e)}
        //onSelect={(e) => handleSearch(e)}
      >
        <Input.Search size="large" placeholder="input here" />
      </AutoComplete>
    </div>
  );
}
