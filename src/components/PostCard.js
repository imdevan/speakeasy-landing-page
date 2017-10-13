import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PostCard = ({post}) => {
  if (!post) return null;

  const renderImage = image => {
    const imageStyle = {
      backgroundImage: `url(${post.better_featured_image.source_url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return <div className='c-h-5 c-h-md-7 d-block' style={imageStyle} />
  }

  return (
    <div className='c-post-card c-bg-fff'>
        {post.better_featured_image && <Row>
          <Col sm={12}>
            {renderImage(post.better_featured_image)}
          </Col>
        </Row>}
        {(post.title || post.excerpt) &&
          <Row>
            <Col sm={12}>
              <div className='p-4 c-post-card-body'>
                {post.title &&
                <h3 className='mb-0'>
                  <strong dangerouslySetInnerHTML={{__html: post.title.rendered}} /></h3>}
                {/* Wordpress wraps excert in p tag by default */}
                {post.acf.description && post.acf.description.length > 0 && <small
                  className='c-m-0-children d-block pt-3 pt-md-4'
                  dangerouslySetInnerHTML={{__html: post.acf.description}} />}
              </div>
            </Col>
          </Row>
        }
    </div>
  );
}

export default PostCard;
