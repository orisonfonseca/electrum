import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { Card } from 'antd';

const CardWrapper = (props) => (
  <div className='container'>
    <Card title={props.title} headStyle={{backgroundColor: 'black', color: 'white'}} style={{width: '40%'}} >{props.children}</Card>
  </div>
);

/*Header.propTypes = {
    bg: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };
  
  Header.defaultProps = {
    bg: undefined,
    title: undefined,
  };
  */
export default CardWrapper;
