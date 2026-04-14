import React from "react";
import shows from "../data/shows.json";

const formatDate = (dateString) => {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
};

const getMonthLabel = (dateString) => {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
};

const groupedShows = shows.reduce((acc, show) => {
  const month = getMonthLabel(show.date);
  if (!acc[month]) {
    acc[month] = [];
  }
  acc[month].push(show);
  return acc;
}, {});

export default function Shows() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-400 mb-3">
            Wax Monkey
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Upcoming Shows
          </h2>
          <div className="mt-4 h-px w-full bg-zinc-800" />
        </div>

        <div className="space-y-14">
          {Object.entries(groupedShows).map(([month, monthShows]) => (
            <div key={month}>
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-100 mb-6">
                {month}
              </h3>

              <div className="space-y-3">
                {monthShows.map((show, index) => (
                  <div
                    key={`${show.date}-${show.city}-${show.venue}-${index}`}
                    className="group rounded-2xl border border-zinc-800 bg-zinc-950/80 px-5 py-5 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="grid grid-cols-1 sm:grid-cols-[120px_120px_1fr] gap-4 items-center w-full">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                            Date
                          </p>
                          <p className="mt-1 text-lg font-semibold text-white">
                            {formatDate(show.date)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                            Day
                          </p>
                          <p className="mt-1 text-base text-zinc-200">
                            {show.day}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <p className="text-xl md:text-2xl font-semibold text-white">
                              {show.venue}
                            </p>

                            {show.featured && (
                              <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-amber-300">
                                Special
                              </span>
                            )}
                          </div>

                          <p className="mt-1 text-sm md:text-base text-zinc-400">
                            {show.city}, {show.state}
                          </p>
                        </div>
                      </div>

                      <a
                        href={show.ticketLink || "#"}
                        target={show.ticketLink ? "_blank" : undefined}
                        rel={show.ticketLink ? "noreferrer" : undefined}
                        className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition ${
                          show.ticketLink
                            ? "border border-white/15 bg-white text-black hover:bg-zinc-200"
                            : "cursor-default border border-zinc-700 bg-zinc-900 text-zinc-500"
                        }`}
                        onClick={(e) => {
                          if (!show.ticketLink) e.preventDefault();
                        }}
                      >
                        {show.ticketLink ? "Tickets" : "Tickets Soon"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}