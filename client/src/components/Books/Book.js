import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';

import './Books.css';

function Book({ title, image, author, description, published, pages, preview, language }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <Card className='card__container'>
      <CardMedia>
        <img className='card__image' src={image} alt={title} />
      </CardMedia>
      <CardContent>
        <h1 className="card__title">{title}</h1>
        <p className="card__author">Author {author}</p>
        <p className="card__description">{truncate(description, 100)}</p>
      </CardContent>
      <CardActions>
        <Popup
          trigger={<Button className="learn__btn" variant="contained" size="medium" color="primary">Read more</Button>}
          modal
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
            </button>
              <div className="header"> {title}</div>
              <section className='try'>
                <div className="popup__info">
                  <img src={image} alt="" />
                  <div className="popup__text">
                    <h1>Book Information</h1>
                    <p>Author: {author}</p>
                    <p>Date published: {published}</p>
                    <p>Language: {language}</p>
                    <p>Page count: {pages}</p>
                    <Button className='preview__btn' variant="contained" size="medium" color="primary">
                      <a href={preview} target="_blank" rel="noreferrer">Book Preview</a>
                    </Button>
                  </div>
                </div>
                <div className="content">
                  <h3>Desctiption:</h3>
                  <p>{description}</p>
                </div>
              </section>
            </div>

          )}
        </Popup>
      </CardActions>
    </Card>
  )
}

export default Book;

<Popup trigger={<button> Trigger</button>} position="right center">
  <div>Popup content here !!</div>
</Popup>
