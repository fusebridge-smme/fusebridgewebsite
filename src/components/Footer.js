import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

// Instagram Icon
const SimpleInstagramIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className || "w-5 h-5"}
  >
    <path d="M12 2.163c3.204 0 3.584.013 4.85.071 1.402.063 2.122.257 2.651.464.674.257 1.228.618 1.772 1.162.544.545.905 1.098 1.162 1.771.206.529.401 1.248.464 2.652.058 1.266.071 1.646.071 4.85s-.013 3.584-.071 4.85c-.063 1.402-.257 2.122-.464 2.651-.257.674-.618 1.228-1.162 1.772-.545.544-1.098.905-1.771 1.162-.529.206-1.248.401-2.652.464-1.266.058-1.646.071-4.85.071s-3.584-.013-4.85-.071c-1.402-.063-2.122-.257-2.651-.464-.674-.257-1.228-.618-1.772-1.162-.544-.545-.905-1.098-1.162-1.771-.206-.529-.401-1.248-.464-2.652-.058-1.266-.071-1.646-.071-4.85s.013-3.584.071-4.85c.063-1.402.257-2.122.464-2.651.257-.674.618-1.228 1.162-1.772.545-.544 1.098-.905 1.771-1.162.529-.206 1.248-.401 2.652-.464 1.266-.058 1.646-.071 4.85-.071zM12 4.098c-2.926 0-3.308.012-4.484.065-1.177.054-1.62.234-1.996.388-.475.195-.788.455-1.077.744-.289.289-.549.602-.744 1.077-.154.376-.334.819-.388 1.996-.053 1.176-.065 1.558-.065 4.484s.012 3.308.065 4.484c.054 1.177.234 1.62.388 1.996.195.475.455.788.744 1.077.289.289.602.549 1.077.744.376.154.819.334 1.996.388 1.176.053 1.558.065 4.484.065s3.308-.012 4.484-.065c1.177-.054 1.62-.234 1.996-.388.475-.195.788-.455 1.077-.744.289-.289.549-.602.744-1.077.154-.376.334-.819.388-1.996.053-1.176.065-1.558.065-4.484s-.012-3.308-.065-4.484c-.054-1.177-.234-1.62-.388-1.996-.195-.475-.455-.788-.744-1.077-.289-.289-.602-.549-1.077-.744-.376-.154-.819-.334-1.996-.388-1.176-.053-1.558-.065-4.484-.065zm0 1.832c2.404 0 2.67.01 3.593.052 1.05.048 1.505.211 1.815.334.359.146.54.298.814.573.275.275.427.455.573.814.123.31.286.766.334 1.815.042.923.052 1.188.052 3.592s-.01 2.67-.052 3.593c-.048 1.05-.211 1.505-.334 1.815-.146.359-.298.54-.573.814-.275.275-.455.427-.814.573-.31.123-.766.286-1.815.334-.923.042-1.188.052-3.592.052s-2.67-.01-3.593-.052c-1.05-.048-1.505-.211-1.815-.334-.359-.146-.54-.298-.814-.573-.275-.275-.427-.455-.573-.814-.123-.31-.286-.766-.334-1.815-.042-.923-.052-1.188-.052-3.592s.01-2.67.052-3.593c.048-1.05.211-1.505.334-1.815.146-.359.298-.54.573-.814.275-.275.455-.427.814-.573.31-.123.766-.286 1.815-.334.923-.042 1.188-.052 3.592-.052zm0 3.864a4.484 4.484 0 100 8.968 4.484 4.484 0 000-8.968zm0 1.832a2.652 2.652 0 110 5.304 2.652 2.652 0 010-5.304zm6.273-2.637a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1z" />
  </svg>
);

const contactInfo = {
  email: "fusebridge@gmail.com",
  phone: "+91 9640416345",
  city: "Hyderabad, India",
  instagram: "fusebridge",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-6 pb-12">
      <div className="border-t border-vanilla pt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pb-12">
          {/* Column 1: Brand Info */}
          <div className="col-span-1">
            <Image
              src="illustrations/logo-text.svg"
              alt="Fuse Bridge Logo"
              width={150}
              height={350}
            />
            <p className="text-sm text-vanilla mt-4">
              Bridging Ideas Into Digital Success.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-orange mb-4">Reach Us</h3>
            <ul className="space-y-3 text-vanilla">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-vanilla" />
                {contactInfo.email}
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-vanilla" />
                {contactInfo.phone}
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-vanilla" />
                <span>{contactInfo.city}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-orange mb-4">Connect</h3>
            <Link
              href={`https://instagram.com/${contactInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-vanilla hover:text-orange hover:border-orange transition duration-200"
            >
              <SimpleInstagramIcon className="w-8 h-8" />
            </Link>
          </div>
        </div>

        {/* Separator and Copyright */}
        <div className="border-t border-vanilla pt-8">
          <p className="text-center text-sm text-vanilla">
            &copy; {currentYear} Fuse Bridge. All rights reserved.
            <span className="md:inline-block md:ml-4 mt-2 md:mt-0 block text-orange">
              Made with passion by Mvl prem
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
