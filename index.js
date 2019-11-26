/*
 * @Author: zhaoyuyang
 * @Date: 2018-07-04 17:23:11
 * @Last Modified by: zhaoyuyang
 * @Last Modified time: 2018-07-10 16:30:45
 */
import React, { PureComponent } from 'react';
import styles from './style.less';

export default class Watermark extends PureComponent {
  render() {
    const {
      text,
      top, // 水印起始位置x轴坐标
      left, // 水印起始位置Y轴坐标
      rows, // 水印行数
      cols, // 水印列数
      width, // 水印宽度
      height, // 水印高度
      x_space, // 水印x轴间隔
      y_space, // 水印y轴间隔
      color, // 水印字体颜色
      opacity, // 水印透明度
      fontsize, // 水印字体大小
      fontFamily, // 水印字体
      rotate, // 水印倾斜度数
      wrapWidth,
      wrapHeight,
      // zIndex,
    } = this.props;
    const rowsArr = (new Array(rows)).fill('');
    const colsArr = (new Array(cols)).fill('');
    return (
      <div
        className={styles.watermarkWrap}
        style={{
          paddingLeft: left,
          paddingTop: top,
          width: wrapWidth,
          height: wrapHeight,
          fontFamily,
          color,
          opacity,
          fontsize,
          // zIndex,
        }}
      >
        {typeof text === 'string' && text.length > 0 && rowsArr.map((row, index) => {
          return (
            <div
              className={styles.row}
              style={{ paddingBottom: y_space }}
              key={index.toString()}
            >
              {colsArr.map((col, i) => {
                return (
                  <div
                    key={i.toString()}
                    className="watermark"
                    dangerouslySetInnerHTML={{ __html: text }}
                    style={{
                      width,
                      height,
                      transform: `rotate(${rotate}deg)`,
                      marginRight: x_space,
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

Watermark.defaultProps = {
  text: '',
  top: 20, // 水印起始位置x轴坐标
  left: 20, // 水印起始位置Y轴坐标
  rows: 20, // 水印行数
  cols: 6, // 水印列数
  width: 230, // 水印宽度
  height: 90, // 水印高度
  x_space: 100, // 水印x轴间隔
  y_space: 50, // 水印y轴间隔
  color: '#000', // 水印字体颜色
  opacity: 0.15, // 水印透明度
  fontsize: '15px', // 水印字体大小
  fontFamily: '微软雅黑', // 水印字体
  rotate: 15, // 水印倾斜度数
  wrapWidth: '100%', // 水印容器的高度
  wrapHeight: '100%', // 水印容器的宽度
  zIndex: 100,
};
