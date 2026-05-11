import Link from "next/link";
import Image from "next/image";

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

const EventCard = ({title, image, slug, location, date, time}: Props) => {
  return (
    <Link href={`/events/${slug}`} id="events-card">
        <Image src={image} alt={title} width = {410} height = {300} className="poster"/>

        <div className="flex flex-row gap-2">
            <p>{location}</p>
            <div>
                <p>{date} {time}</p>
            </div>
        </div>
        <p className="title">{title}</p>
    </Link>
  )
}

export default EventCard;