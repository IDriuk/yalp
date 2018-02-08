import React, { Component, Fragment } from 'react';
import './Photo.css';

class Photo extends Component {
  render () {
    const { type, src, title } = this.props;

    return (
      <Fragment>
        {type === "businesses_category" &&
          <a className="browse-businesses_category island island-light browse-businesses_category--full-width-island">
            <img
              className="browse-businesses_category-img"
              src={src}
              alt={title}
            />
            <h3 className="browse-businesses_category-title u-text-truncate h4">{title}</h3>
          </a>}

        {type === "card_photo" &&
          <div className="card_photo">
            <div className="photo-box photo-box--interactive photo-box--background" style={{backgroundImage: `url(${src})`}}>
              <a className="photo-box_link">
                <img
                  className="photo-box-img"
                  alt="Bluestone Lane"
                  height="400"
                  width="600"
                  src={src}
                />
              </a>
            </div>
          </div>}

        {type === "avatar_30" &&
          <div className="photo-box pb-30s">
            <a>
              <img alt="alt" className="photo-box-img" height="30" width="30" src={src} />
            </a>
          </div>}

        {type === "avatar_60" &&
          <div className="photo-box pb-60s">
            <a>
              <img alt={title} className="photo-box-img" height="60" width="60" src={src} />
            </a>
          </div>}

        {type === "avatar_media" &&
          <div className="media-avatar">
            <div className="list-island_item-avatar">
              <div style={{backgroundImage: `url(${src})`}} className="photo-box photo-box--interactive photo-box--background">
                <a className="photo-box_link">
                  <img
                    alt="img"
                    className="photo-box-img"
                    height="90"
                    width="90"
                    src={src}
                  />
                </a>
              </div>
            </div>
          </div>}

        {(type === "feed" || type === "feed_big" || type === "feed_single") &&
          <div style={{backgroundImage: `url(${src})`}} className={`feed-item_photo ${type === "feed_big" ? "feed-item_photo--big" : ""} feed-item_photo--with-actions`}>
            <a className="feed-item_link">
              <img
                alt={title}
                src={src}
                width={type === "feed_big" || type === "feed_single" ? 300 : 168}
                height={type === "feed_big" || type === "feed_single" ? 300 : 168}
              />
            </a>
          </div>}

        {type === "feed_hero" &&
          <div className="feed-item_hero">
            <div style={{backgroundImage: `url(${src})`}} className="photo-box photo-box--interactive photo-box--background">
              <a className="photo-box_link">
                <img alt={title} className="photo-box-img" height="400" width="600" src={src} />
              </a>
            </div>
          </div>}

      </Fragment>
    );
  }
}

export default Photo;
