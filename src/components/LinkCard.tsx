import React from "react";

interface Props {
  title: string;
  body: string;
  href: string;
}

const LinkCard: React.FC<Props> = (props: Props) => {
  return (
    <li className="bg-red-600 h-64 w-60 p-4 mx-9 mt-10 rounded-lg">
      <a href={props.href}>
        <h2 className="text-2xl">
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p>{props.body}</p>
      </a>
    </li>
  );
};

export default LinkCard;
