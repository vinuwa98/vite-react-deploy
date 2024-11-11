import "./portfolio.scss";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://www.reddit.com/r/pics/comments/6ne1wg/one_of_the_best_photos_ive_ever_taken/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae magni quas aperiam quod provident nisi facere! Consectetur id atque nobis architecto in ipsam iusto expedita deleniti! Aliquid, minus iste!",
    },
    {
        id: 2,
        title: "Next js Commerce",
        img: "https://www.freepik.com/free-photos-vectors/nice-pic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae magni quas aperiam quod provident nisi facere! Consectetur id atque nobis architecto in ipsam iusto expedita deleniti! Aliquid, minus iste!",
    },
    {
        id: 3,
        title: "Java Commerce",
        img: "https://www.istockphoto.com/photos/amazing-pics",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae magni quas aperiam quod provident nisi facere! Consectetur id atque nobis architecto in ipsam iusto expedita deleniti! Aliquid, minus iste!",
    },
    {
        id: 4,
        title: "Java Script Commerce",
        img: "https://www.istockphoto.com/photos/pics-of-the-saipan",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae magni quas aperiam quod provident nisi facere! Consectetur id atque nobis architecto in ipsam iusto expedita deleniti! Aliquid, minus iste!",
    }
];

const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    );
}

const Portfolio = () => {
  return (
    <div className="portfolio">
        {items.map(item => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  );
}

export default Portfolio;
