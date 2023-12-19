import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 pb-5">
      <ul className="flex gap-3">
        <li>
          <a href="">
            <img className="w-7"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
            />
          </a>
        </li>
        <li>
            <a href="">
                <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="" />
            </a>
        </li>
        <li>
            <a href="">
                <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="" />
            </a>
        </li>
        <li>
            <a href="">
                <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png" alt="" />
            </a>
        </li>
      </ul>
      <div className="text-sm">Lexy &copy; 2023</div>
    </div>
  );
}
