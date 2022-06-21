import React from 'react';

import css from './Card.module.css';

console.log('css :>> ', css);

const Card = ({ photo }) => {
  //   const { photos } = props;
  console.log('photo :>> ', photo);

  const { id, tags, webformatURL, user } = photo;

  const authorTitle = `Author: ${user}`;

  return (
    <div className={css.cardBlock}>
      {/* <div className='card'> */}
      <h1 className={css.titleStyle}>{`TITLE: ${tags}`}</h1>
      <h2>{authorTitle}</h2>
      <img src={webformatURL} alt={tags} width='300' />
      {/* {id && <div>ID: {id}</div>} */}
      <div
        className={id ? css.avaliable : css.unavaliable}
        // style={{ backgroundColor: id ? 'green' : 'red' }}
      >
        ID: {id ? id : 'unavaliable'}
      </div>
    </div>
  );
};

export default Card;

// class Card extends React.Component {

//         render() {
//                 return (
//                         <div>
//                         <h1>Title</h1>
//                         <h2>Description</h2>
//                         <img
//                           src='https://cdn.pixabay.com/photo/2020/03/27/08/45/stone-lotus-4972881__340.jpg'
//                           alt=''
//                           width='300'
//                         />
//                       </div>
//                 );
//         }
// }

// export default Card;
