import stylePost from "./Post.module.css";

const Post = function () {
  return (
    <div className={stylePost.post}>

      <div className={stylePost.post__body}>
        <div className={stylePost.post__items}>
          <div className={`${stylePost.post__item} ${stylePost.post__item_avatar}`}>
            <div className= {stylePost.post__image}>
              <img src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663622642_59-mykaleidoscope-ru-p-uspeshnii-okhotnik-na-ribalke-instagram-66.jpg" alt="123" />
            </div>
          </div>
          <div  className={`${stylePost.post__item} ${stylePost.post__item_text}`}>
            <div className={stylePost.post__title}>Lorem, ipsum dolor.</div>
            <div className={stylePost.post__text}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Porro officiis eius, voluptatibus corporis corrupti iure.
                
                </p>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Post;