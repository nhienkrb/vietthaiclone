import Link from "next/link";

export type JobCardItem = {
  title: string;
  location: string;
  experience: string;
  quantity: string;
  deadline: string;
  label: string;
  labelAlt: string;
};

export default function JobsCard({
  job,
  href,
  className = "",
  titleClassName = "",
}: {
  job: JobCardItem;
  href?: string;
  className?: string;
  titleClassName?: string;
}) {
  const content = (
    <>
      <img src={job.label} className="absolute top-3 -right-1 w-12" alt={job.labelAlt} />
      <p className="text-xs">{job.location}</p>

      <h3 className={`mt-1 text-text-main ${titleClassName}`}>{job.title}</h3>

      <dl className="mt-3 space-y-2 text-sm text-gray-700">
        <div className="flex gap-2">
          <dt className="shrink-0">Kinh nghiệm:</dt>
          <dd className="font-semibold text-text-main">{job.experience}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0">Số lượng tuyển:</dt>
          <dd className="font-semibold text-text-main">{job.quantity}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0">Hạn nộp hồ sơ:</dt>
          <dd className="font-semibold text-text-main">{job.deadline}</dd>
        </div>
      </dl>
    </>
  );

  const sharedClassName = `relative block h-[180px] rounded-lg border border-[#03542D4D] border-l-[3px] bg-white p-5 ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return <article className={sharedClassName}>{content}</article>;
}

