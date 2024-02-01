import Button from "@/app/components/UI/FormComponents/Button/Button";

export default function JobItemHeader({
  logo,
  logoBackground,
  company,
  website,
}) {
  return (
    <div>
      <p>{company}</p>
      <p>{website}</p>
      <Button>Company Site</Button>
    </div>
  );
}
