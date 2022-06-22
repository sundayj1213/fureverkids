
import Link from "next/link";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization


export default function Event({event}) {
    return (
        <div className="card mb-3" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{event.title.rendered}</h5>
            <div className="card-text" dangerouslySetInnerHTML={{__html: event.excerpt.rendered}}></div>
                <p className="card-text"><small className="text-muted">{(event.acf.date)}</small></p>
                <Link href={`/events/${event.slug}`}>
                    <a className="btn btn-primary">See more</a>
                </Link>
            </div>
        </div> 
    )
}

