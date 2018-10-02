import React, { Component } from 'react';

class DndImages extends Component {

  deleteImage = (index) => {
    this.props.deleteFile(this.props.field, index);
  }

  render() {
    const { images = [] } = this.props;
    return (
      <div className="dnd__images-wrap" >
        {images.map( (imageObj, index) => {
          return (
            <div key={imageObj.name} className="dnd__image-wrap" >
              <img src={imageObj.src} className="dnd__image" />

              <span
                onClick={() => this.deleteImage(index) }
                className="dnd__image-delete"
                >
                <i className="fa fa-times dnd-close-icon" />
              </span>
            </div>
          )
        })}
      </div>
    );
  }

}

export default DndImages;
