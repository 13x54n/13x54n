import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 pb-5">
      <ul className="flex gap-3">
        <li>
          <a href="https://github.com/13x54n" target="_blank">
            <img
              className="w-7"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub 13x54n"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/not.so.lexy/" target="_blank">
            <img
              className="w-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
              alt="Instagram - not.so.lexy"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/domsan_lex" target="_blank">
            <img
              className="w-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
              alt="Twitter - domsan_lex"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lexworld/" target="_blank">
            <img
              className="w-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png"
              alt="LinkedIn - lex.world"
            />
          </a>
        </li>
      </ul>
      <div className="text-sm">Lexy &copy; 2023</div>
    </div>
  );
}
