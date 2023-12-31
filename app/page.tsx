import { GetFormStats } from "@/actions/forms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return <CardStatsWrapper></CardStatsWrapper>;
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardsProps {
  data: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardsProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-col-4">
      <StatsCard
        title="Total visits"
        // icon={<></>}
        helperText="All time form visits"
        value={data.visits.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />

      <StatsCard
        title="Total submissions"
        // icon={<></>}
        helperText="All time form submissions"
        value={data.submissions.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        title="Submission rate"
        // icon={<></>}
        helperText="Visits that result in form submission"
        value={data.submissionRate.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        title="Bounce rate"
        // icon={<></>}
        helperText="Visits that leaves without submission"
        value={data.bounceRate.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
    </div>
  );
}

interface StatsCardProps {
  title: string;
  value: string;
  // icon: ReactNode;
  helperText: string;
  loading: boolean;
  className: string;
}

function StatsCard(props: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-center">
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="">
          {props.loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!props.loading && props.value}
        </div>
      </CardContent>
    </Card>
  );
}
