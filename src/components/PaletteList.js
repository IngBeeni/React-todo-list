import React, { Component } from "react";
import Palette from "./Palette";

class PaletteList extends Component {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return this.props.colors !== nextProps.colors;
  //   }

  render() {
    const { colors } = this.props;
    console.log("PaletteList.js colors : " + colors);
    console.log("PaletteList.js colors : " + colors);
    /* 3. 색상 ['#343a40', '#f03e3e', '#12b886', '#228ae6'] 를 Palette 컴포넌트의 props 로 전달하고, 이를 컴포넌트 배열로 변환하세요. */
    const colorList = colors.map(({ id, color }) => (
      <Palette id={id} color={color} key={id} />
    ));
    console.log("PaletteList.js colorList : " + colorList);
    return <div>{colorList}</div>;
  }
}

export default PaletteList;
