import React, { Component } from "react";
import {Route, useNavigate} from 'react-router-dom';


export function UseAcorn(path) {
  const navigate = useNavigate();
    navigate(path)

  }
