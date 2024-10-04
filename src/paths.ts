
const paths = {
  home() {
    return '/';
  },
  topic(slug: string) {
    return `/topics/${slug}`;
  },
  postCreate(slug:string) {
    return `/topics/${slug}/new`;
  },
  post(slug: string, postId: string) {
    return `/topics/${slug}/posts/${postId}`;
  },
};

export default paths