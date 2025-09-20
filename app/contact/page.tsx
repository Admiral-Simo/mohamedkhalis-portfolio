import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import Pager from "@/components/pager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "./ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";

const contactDetails = [
  {
    label: "Name",
    value: "Mohamed Khalis",
    icon: UserIcon, // import some icon
  },
  {
    label: "Email",
    value: "mohamedkhalis@proton.me",
    icon: MailIcon,
    href: "mailto:mohamedkhalis@proton.me",
  },
  {
    label: "Whatsapp Mobile",
    value: "+212-606963061",
    icon: PhoneIcon,
    href: "https://wa.me/+212606963061",
  },
  {
    label: "Location",
    value: "Benimellal, Morocco",
    icon: MapPinIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-khalis-606327293",
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/mohamed-khalis-606327293",
  },
  {
    label: "GitHub",
    value: "github.com/admiral-simo",
    icon: GithubIcon,
    href: "https://github.com/admiral-simo",
  },
];

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Get in touch before I write another line of code!
        </PageHeaderHeading>
      </PageHeader>

      <div id="tabs" className="flex items-center mt-8">
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="max-w-[300px] w-full">
            <TabsTrigger value="form">Form</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="form" className="mt-4">
            <ContactForm />
          </TabsContent>
          <TabsContent value="details" className="mt-4">
            <Card className="max-w-lg">
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
                <CardDescription>
                  Feel free to reach out directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-4">
                    <detail.icon className="h-5 w-5 text-gray-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-indigo-400 hover:underline break-all"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-600 break-all">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            {/* TODO: Contact details */}
          </TabsContent>
        </Tabs>
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/stats"
        prevTitle="Projects"
        nextTitle="Stats"
      />
    </>
  );
};
export default ContactPage;
