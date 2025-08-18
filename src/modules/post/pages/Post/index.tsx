import { useParams } from 'react-router';

import { Error } from '@/components/Error';
import Loader from '@/components/Loader';
import { FOUND_POST_ERROR } from '@/constants/errors';
import { CommentCard, useComments } from '@/modules/comment';
import { AddCommentForm } from '@/modules/comment/components/AddCommentForm';

import { usePost } from '../../hooks/usePost';
import styles from './styles.module.scss';

export const PostPage = () => {
  const { id } = useParams();

  const { post, loading: postLoading, error: postError } = usePost(id ?? '');
  const {
    comments,
    loading: commentsLoading,
    error: commentsError,
    addComment,
  } = useComments(id || '');

  if (!id || !post) return <Error text={FOUND_POST_ERROR} />;
  if (postLoading || commentsLoading) return <Loader />;
  if (postError || commentsError)
    return <Error text={postError || commentsError} />;

  const { title, body } = post;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <AddCommentForm onSubmit={addComment} />
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </section>
  );
};
