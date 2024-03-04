import { Children } from "react";

interface TweetProps {
  user: string;
  children: string;
  like?: number;
}

export function Tweet(props: TweetProps) {
  return (
    <div>
      <h3>{props.user}</h3>
      <p>{props.children}</p>
      <button className="bg-lime-400">Like {props.like ?? 0}</button>
    </div>
  );
}
