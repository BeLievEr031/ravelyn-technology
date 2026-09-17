"use client";

import { useEffect, useRef, useState } from "react";

export default function TraceVisualizer() {
  const [compiled, setCompiled] = useState(false);
  const traceRef = useRef<HTMLDivElement>(null);

  const vals = {
    cost: ["$0.38", "$0.09"],
    lat: ["11.4s", "6.2s"],
    front: ["41 / 41", "9 / 41"],
    qual: ["94.1%", "94.3%"],
  };

  // Auto-switch to compiled view after 1.2s (respects prefers-reduced-motion)
  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      const timer = setTimeout(() => setCompiled(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const costVal = compiled ? vals.cost[1] : vals.cost[0];
  const latVal = compiled ? vals.lat[1] : vals.lat[0];
  const frontVal = compiled ? vals.front[1] : vals.front[0];
  const qualVal = compiled ? vals.qual[1] : vals.qual[0];

  return (
    <div className="instrument">
      <div className="instrument-bar">
        <span className="instrument-title">
          trajectory · support_ticket_resolve · 41 calls
        </span>
        <div className="seg" role="group" aria-label="Trajectory view">
          <button
            type="button"
            id="btn-raw"
            aria-pressed={String(!compiled) as "true" | "false"}
            onClick={() => setCompiled(false)}
          >
            as written
          </button>
          <button
            type="button"
            id="btn-opt"
            aria-pressed={String(compiled) as "true" | "false"}
            onClick={() => setCompiled(true)}
          >
            after compilation
          </button>
        </div>
      </div>

      <div className="trace-scroll">
        <div
          className={`trace${compiled ? " compiled" : ""}`}
          id="trace"
          ref={traceRef}
        >
          {/* task row */}
          <div className="trace-row">
            <span className="lane">task</span>
            <div className="bars">
              <div className="bar" style={{ "--w": "100" } as React.CSSProperties} data-heat="3">
                resolve_ticket
              </div>
            </div>
          </div>

          {/* phase row */}
          <div className="trace-row">
            <span className="lane">phase</span>
            <div className="bars">
              <div className="bar" style={{ "--w": "18" } as React.CSSProperties} data-heat="4">plan</div>
              <div className="bar" style={{ "--w": "22" } as React.CSSProperties} data-heat="3">retrieve</div>
              <div className="bar" style={{ "--w": "34" } as React.CSSProperties} data-heat="4">draft</div>
              <div className="bar" style={{ "--w": "26" } as React.CSSProperties} data-heat="3">verify</div>
            </div>
          </div>

          {/* step row */}
          <div className="trace-row">
            <span className="lane">step</span>
            <div className="bars">
              <div className="bar" style={{ "--w": "10" } as React.CSSProperties} data-heat="4">decompose</div>
              <div className="bar" style={{ "--w": "8" } as React.CSSProperties} data-heat="3" data-compile="1">select_tool</div>
              <div className="bar" style={{ "--w": "7" } as React.CSSProperties} data-heat="3" data-compile="1">rewrite_q</div>
              <div className="bar" style={{ "--w": "9" } as React.CSSProperties} data-heat="2" data-compile="1">search</div>
              <div className="bar" style={{ "--w": "6" } as React.CSSProperties} data-heat="3" data-compile="1">rerank</div>
              <div className="bar" style={{ "--w": "9" } as React.CSSProperties} data-heat="3" data-compile="1">outline</div>
              <div className="bar" style={{ "--w": "17" } as React.CSSProperties} data-heat="4">compose</div>
              <div className="bar" style={{ "--w": "8" } as React.CSSProperties} data-heat="3" data-compile="1">cite</div>
              <div className="bar" style={{ "--w": "12" } as React.CSSProperties} data-heat="4">check_claims</div>
              <div className="bar" style={{ "--w": "7" } as React.CSSProperties} data-heat="3" data-compile="1">format</div>
              <div className="bar" style={{ "--w": "7" } as React.CSSProperties} data-heat="2" data-compile="1">score</div>
            </div>
          </div>

          {/* call row */}
          <div className="trace-row">
            <span className="lane">call</span>
            <div className="bars">
              <div className="bar" style={{ "--w": "5" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "4" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "7" } as React.CSSProperties} data-heat="4"></div>
              <div className="bar" style={{ "--w": "3" } as React.CSSProperties} data-heat="2" data-compile="1"></div>
              <div className="bar" style={{ "--w": "6" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "4" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "8" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "3" } as React.CSSProperties} data-heat="2" data-compile="1"></div>
              <div className="bar" style={{ "--w": "9" } as React.CSSProperties} data-heat="4"></div>
              <div className="bar" style={{ "--w": "5" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "4" } as React.CSSProperties} data-heat="2" data-compile="1"></div>
              <div className="bar" style={{ "--w": "6" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "3" } as React.CSSProperties} data-heat="2" data-compile="1"></div>
              <div className="bar" style={{ "--w": "7" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "5" } as React.CSSProperties} data-heat="4"></div>
              <div className="bar" style={{ "--w": "4" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "6" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
              <div className="bar" style={{ "--w": "3" } as React.CSSProperties} data-heat="2" data-compile="1"></div>
              <div className="bar" style={{ "--w": "8" } as React.CSSProperties} data-heat="3" data-compile="1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="legend">
        <span>cost per call</span>
        <i className="chip" style={{ background: "var(--h1)" }}></i>
        <i className="chip" style={{ background: "var(--h2)" }}></i>
        <i className="chip" style={{ background: "var(--h3)" }}></i>
        <i className="chip" style={{ background: "var(--h4)" }}></i>
        <span style={{ marginLeft: "10px" }}>compiled</span>
        <i
          className="chip"
          style={{
            background: "var(--cold-soft)",
            border: "1px solid var(--cold)",
          }}
        ></i>
      </div>

      {/* Readout stats */}
      <div className="readout">
        <div className="stat">
          <span className="stat-k">cost / task</span>
          <span id="v-cost" className={`stat-v${compiled ? " down" : ""}`}>
            {costVal}
          </span>
        </div>
        <div className="stat">
          <span className="stat-k">p50 latency</span>
          <span id="v-lat" className={`stat-v${compiled ? " down" : ""}`}>
            {latVal}
          </span>
        </div>
        <div className="stat">
          <span className="stat-k">calls on frontier</span>
          <span id="v-front" className={`stat-v${compiled ? " down" : ""}`}>
            {frontVal}
          </span>
        </div>
        <div className="stat">
          <span className="stat-k">resolution rate</span>
          <span id="v-qual" className="stat-v">
            {qualVal}
          </span>
        </div>
      </div>
    </div>
  );
}
