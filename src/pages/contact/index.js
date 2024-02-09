// pages/contact.js
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Para más información, puedes contactarnos a...</p>
      <Link href="/">
        Volver al inicio
      </Link>
    </div>
  );
}
