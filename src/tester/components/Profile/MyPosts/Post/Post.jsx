import stylePost from "./Post.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';



const Post = function (props) {
  return (
    <div className={stylePost.post}>

      <div className={stylePost.post__body}>
        <div className={stylePost.post__items}>
          <div className={`${stylePost.post__item} ${stylePost.post__item_avatar}`}>
            <div className={stylePost.post__image}>
              <img src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663622642_59-mykaleidoscope-ru-p-uspeshnii-okhotnik-na-ribalke-instagram-66.jpg" alt="123" />
            </div>
          </div>
          <div className={`${stylePost.post__item} ${stylePost.post__item_text}`}>
            <div className={stylePost.post__title}>Lorem, ipsum dolor.</div>
            <div className={stylePost.post__text}>
              <p>{props.message}
              </p>
              <div className={stylePost.post__like}>
                {props.like} лайков
                <div className={stylePost.fonts}>

                  <span className={`${stylePost.like} ${stylePost.font}`}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                  <span className={`${stylePost.dislike} ${stylePost.font}`}>
                    <FontAwesomeIcon icon={faThumbsDown} />
                    </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Post;