const fetchUrl = "http://localhost/wordpress/wp-json/wp/v2/pages";

async function StaticPage({ pageSlug, id }) {
  /* http://localhost/wordpress/wp-json/wp/v2/pages?_fields=id,title,slug,status */
  /* http://localhost/wordpress/wp-json/wp/v2/pages/19?_fields=id,slug,title,content */
  const req = await fetch(`${fetchUrl}/${id}?_fields=id,slug,title,content`);
  const page = await req.json();
  console.log(pageSlug);
  return (
    <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
  );
}

export default StaticPage;
