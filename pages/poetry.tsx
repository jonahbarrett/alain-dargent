import Image from "next/image";
import probe from 'probe-image-size';
import { GetServerSideProps } from "next";
import { Navbar } from "../components/Navbar";
import Head from "next/head";


export default function Instagram({ photos }: { photos: { media_url: string, caption: string, id: string, width: number, height: number }[] }) {
    return (
        <div>
            <Head>
                <title>Poetry</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <main>
                {
                    photos.length > 0 ?

                        photos.map(({ media_url, caption, id, width, height }) => (
                            <figure key={id} className="mx-auto p-5 max-w-screen-lg">
                                <Image src={media_url} layout='responsive' width={width} height={height} alt='Poetry'></Image>
                                <figcaption className="text-white font-serif pt-2">{caption}</figcaption>
                            </figure>
                        ))
                        :
                        <div className="flex flex-row min-h-screen justify-center items-center">
                            <p className="text-white font-serif">Come back soon.</p>
                        </div>
                }
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`https://graph.instagram.com/me/media?fields=media_url,caption&access_token=${process.env.access_token}`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    const photos = await Promise.all(data.data.map(async (data: { media_url: string, caption: string, id: string }) => {
        let res = await probe(data.media_url);
        return {
            media_url: data.media_url.replace(/^[^.]*/, 'https://scontent'),
            caption: data.caption,
            id: data.id,
            width: res.width,
            height: res.height
        }
    }));

    return {
        props: {
            photos
        }
    }
}