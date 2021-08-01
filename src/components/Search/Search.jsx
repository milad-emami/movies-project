import React, { useEffect, useState } from "react";
import { Input, AutoComplete, Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import classes from "./Search.module.scss";
import useDebounce from "../../hooks/useDebounce";
import { useHistory } from "react-router-dom";
import slugify from "../../helpers/slugify";

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
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const debouncedQuery = useDebounce(query, 300);

  function handleLoadMovie(id) {
    const data = searchedItems.find((d) => d.id == id);
    setInputValue("");

    switch (data.media_type) {
      case "movie":
        return history.push(`/movies/${data.id}/${slugify(data.title)}`);
      case "tv":
        return history.push(`/tv-shows/${data.id}/${slugify(data.name)}`);
      case "person":
        return history.push(`/celebrities/${data.id}/${slugify(data.name)}`);
    }
  }

  useEffect(() => {
    if (debouncedQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=26b842803ccbaba051d1fd7169b8d506&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then((r) => r.json())
        .then((data) => setSearchedItems(data.results));
    }
  }, [debouncedQuery]);

  function makeOptions() {
    if (searchedItems.length && query) {
      return [
        {
          label: renderTitle("Movies"),
          options: searchedItems
            .filter((item) => item.media_type === "movie")
            .map((i) =>
              renderItem(
                i.title,
                i.id,
                <Rate
                  style={{ fontSize: 13 }}
                  allowHalf
                  value={i.vote_average / 2}
                />
              )
            ),
        },
        {
          label: renderTitle("TV Shows"),
          options: searchedItems
            .filter((item) => item.media_type === "tv")
            .map((i) =>
              renderItem(
                i.name,
                i.id,
                <Rate
                  style={{ fontSize: 13 }}
                  allowHalf
                  value={i.vote_average / 2}
                />
              )
            ),
        },
        {
          label: renderTitle("People"),
          options: searchedItems
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
      ].filter((type) => type.options.length);
    }

    return null;
  }

  return (
    <div className={classes.root}>
      <AutoComplete
        options={makeOptions()}
        onSearch={(e) => setQuery(e)}
        onSelect={handleLoadMovie}
        value={inputValue}
        onChange={setInputValue}
      >
        <Input.Search
          size="large"
          placeholder="Search movies, people and tv shows..."
        />
      </AutoComplete>
    </div>
  );
}
