import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import './Books.css';

function Book({ title, image, author, description }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <Card className='card__container'>
      <CardMedia>
        <img className='card__image' src={image} alt={title} />
      </CardMedia>
      <CardContent>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{truncate(description, 150)}</p>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Book
