import React from "react";
import { Link } from "react-router-dom";

export default function LeftMenu() {
  return (
    <div>
      <ul>
        
        
        <li><Link to="/quickStart">快速开始</Link></li>
        <li><Link to="/home/1">home/1</Link></li>
        <li>菜单3</li>
        <li>菜单4</li>
        <li>菜单5</li>
      </ul>
    </div>
  );
}
