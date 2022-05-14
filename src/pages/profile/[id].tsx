import { useRouter } from 'next/router';

export default function Profile() {
  const {
    query: { id },
  } = useRouter();

  return <h1>{id}</h1>;
}
