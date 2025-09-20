import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import Pager from "@/components/pager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactItem from "./ContactItem";

const contactDetails = [
  {
    label: "Name",
    value: "Mohamed Khalis",
    icon: "user",
    copyable: false,
  },
  {
    label: "Email",
    value: "mohamedkhalis@proton.me",
    icon: "mail",
    href: "mailto:mohamedkhalis@proton.me",
    copyable: true,
  },
  {
    label: "Whatsapp Mobile",
    value: "+212-606963061",
    icon: "phone",
    href: "https://wa.me/+212606963061",
  },
  {
    label: "Location",
    value: "Benimellal, Morocco",
    icon: "mapPin",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-khalis-606327293",
    icon: "linkedin",
    href: "https://linkedin.com/in/mohamed-khalis-606327293",
  },
  {
    label: "GitHub",
    value: "github.com/admiral-simo",
    icon: "github",
    href: "https://github.com/admiral-simo",
  },
] as const;

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
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="max-w-[300px] w-full">
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Have a project in mind or just want to say hello? I'd love to
                  hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contactDetails.map((detail) => (
                    <ContactItem key={detail.label} {...detail} />
                  ))}
                </div>
              </CardContent>
            </Card>
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
