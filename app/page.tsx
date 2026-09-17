import TraceVisualizer from "./components/TraceVisualizer";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <NavBar />

      {/* ── Hero ── */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <h1>An inference compiler for agent workloads.</h1>
            <p className="lede">
              Point your agent at one endpoint. Ravelyn profiles every
              trajectory, finds the call shapes that repeat, and compiles those
              hot paths down to small models trained on your own traffic. The
              genuinely hard steps keep running on the frontier models you
              already pay for. Everything else gets cheaper every week.
            </p>
            <div className="cta-row">
              <a className="btn btn-lg" href="#profile">
                Get a profile of your workload
              </a>
              <a className="btn btn-lg btn-ghost" href="#how">
                See how it works
              </a>
            </div>
            <p className="cta-note">
              No contract to see a profile. One week of traces is enough.
            </p>
          </div>

          {/* Interactive trace widget — client component */}
          <TraceVisualizer />

          <p
            className="wrap caption"
            style={{ paddingLeft: 0, paddingRight: 0, maxWidth: "none" }}
          >
            Example trajectory. Figures describe a representative support
            workload, not a guarantee.
          </p>
        </div>
      </header>

      {/* ── Shape section ── */}
      <section id="shape">
        <div className="wrap">
          <div className="head">
            <h2>
              Agents do the same few things, over and over, at premium prices.
            </h2>
          </div>
          <div className="narrow">
            <p>
              A single agent task is not one model call. It is a dependency
              graph of a few hundred, and the graph is lopsided. A handful of
              steps are genuinely hard: decomposing an ambiguous request,
              composing an answer, judging whether a claim holds.
            </p>
            <p>
              The rest is machinery. Picking a tool. Rewriting a query.
              Reranking six candidates. Coercing output into a schema. Scoring a
              draft. These are the same shapes, with the same structure,
              thousands of times a day, and almost every team routes them to the
              largest model in the account because that is the safe default and
              nobody has time to prove otherwise.
            </p>
            <p>Ravelyn proves otherwise, continuously, on your traffic.</p>
          </div>

          {/* Distribution chart */}
          <div className="dist">
            <div className="dist-bars" aria-hidden="true">
              <i style={{ height: "100%", background: "var(--h4)" }}></i>
              <i style={{ height: "88%", background: "var(--h4)" }}></i>
              <i style={{ height: "79%", background: "var(--h3)" }}></i>
              <i style={{ height: "71%", background: "var(--h3)" }}></i>
              <i style={{ height: "64%", background: "var(--h3)" }}></i>
              <i style={{ height: "58%", background: "var(--h3)" }}></i>
              <i style={{ height: "51%", background: "var(--h3)" }}></i>
              <i style={{ height: "46%", background: "var(--h2)" }}></i>
              <i style={{ height: "41%", background: "var(--h2)" }}></i>
              <i style={{ height: "36%", background: "var(--h2)" }}></i>
              <i style={{ height: "32%", background: "var(--h2)" }}></i>
              <i style={{ height: "28%", background: "var(--h2)" }}></i>
              <i style={{ height: "20%", background: "var(--h1)" }}></i>
              <i style={{ height: "17%", background: "var(--h1)" }}></i>
              <i style={{ height: "15%", background: "var(--h1)" }}></i>
              <i style={{ height: "13%", background: "var(--h1)" }}></i>
              <i style={{ height: "11%", background: "var(--h1)" }}></i>
              <i style={{ height: "10%", background: "var(--h1)" }}></i>
              <i style={{ height: "8%", background: "var(--h1)" }}></i>
              <i style={{ height: "7%", background: "var(--h1)" }}></i>
              <i style={{ height: "6%", background: "var(--h1)" }}></i>
              <i style={{ height: "5%", background: "var(--h1)" }}></i>
              <i style={{ height: "4%", background: "var(--h1)" }}></i>
              <i style={{ height: "4%", background: "var(--h1)" }}></i>
              <i style={{ height: "3%", background: "var(--h1)" }}></i>
              <i style={{ height: "3%", background: "var(--h1)" }}></i>
            </div>
            <div className="dist-note">
              <span>token volume by call shape, one account, 30 days</span>
              <span>12 shapes carry most of the spend</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how">
        <div className="wrap">
          <div className="head">
            <h2>Four stages. You can stop after any of them.</h2>
            <p className="lede">
              Nothing in production changes until you have seen the
              counterfactual and approved it.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-n">01</div>
              <div>
                <h3>Instrument</h3>
                <p>
                  Swap one base URL. The endpoint is OpenAI-compatible, so your
                  SDK, your prompts and your provider keys stay exactly as they
                  are. You get tracing, failover and per-shape cost attribution
                  from the first request.
                </p>
                <p>
                  This stage is free and stays free. If you never go further,
                  you have a better router than the one you had.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-n">02</div>
              <div>
                <h3>Define correct</h3>
                <p>
                  Wire your own success signal: the tests passed, the diff was
                  accepted, the ticket stayed closed, the agent finished without
                  a retry. Ravelyn treats that signal as the objective function.
                </p>
                <p>
                  This is the part that makes the rest work. A compiler with no
                  notion of correctness optimizes for price and quietly ships
                  worse answers. Yours optimizes against the outcome your
                  product already measures.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-n">03</div>
              <div>
                <h3>Plan</h3>
                <p>
                  Set a budget and a service level for the whole task, not for
                  each request. Resolve the ticket under forty cents, under
                  ninety seconds, above a 93% resolution rate. Ravelyn allocates
                  model choice across the entire trajectory so a cheap decision
                  at step three does not cost you forty calls at step forty.
                </p>
                <p>
                  Every plan runs in shadow against live traffic before it is
                  eligible for rollout. You see the measured difference in cost,
                  latency and outcome, side by side, and you decide.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-n">04</div>
              <div>
                <h3>Compile</h3>
                <p>
                  Hot call shapes get a specialist model, trained on your own
                  traffic and your own labeled outcomes, built on permissively
                  licensed open-weight foundations, and served on our
                  infrastructure at single-digit millisecond overhead.
                </p>
                <p>
                  Rollout is per shape and gradual, behind the guards below. One
                  shape at a time, each with a measured baseline you can point
                  at in a board meeting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guards ── */}
      <section id="guards">
        <div className="wrap">
          <div className="head">
            <h2>Every compiled path can bail out mid-request.</h2>
            <p className="lede">
              Borrowed directly from how a tracing JIT works. Optimize the
              common case, keep a guard on every assumption, and fall back the
              instant one breaks.
            </p>
          </div>

          <div className="rows">
            <div className="row">
              <h3>Confidence floor</h3>
              <p>
                Each compiled shape carries a threshold you set. Below it, the
                request is handed straight back to the frontier model before a
                token reaches your user.
              </p>
            </div>
            <div className="row">
              <h3>Drift detection</h3>
              <p>
                Your prompts change, your product changes, your users change.
                When the live distribution moves away from what a specialist was
                trained on, that shape deoptimizes automatically and queues for
                retraining.
              </p>
            </div>
            <div className="row">
              <h3>Shadow scoring never stops</h3>
              <p>
                A sampled slice of compiled traffic keeps running against the
                frontier path in the background, so the quality comparison is
                continuous rather than a one-off pre-launch test.
              </p>
            </div>
            <div className="row">
              <h3>Per-shape rollback</h3>
              <p>
                Revert one call shape without touching the other eleven.
                Rollback is a single API call and takes effect on the next
                request.
              </p>
            </div>
            <div className="row">
              <h3>Kill switch</h3>
              <p>
                One flag returns 100% of traffic to your original providers and
                keys. Your integration is unchanged, so there is nothing to
                migrate back.
              </p>
            </div>
          </div>

          <div className="log" aria-label="Example guard log">
            <div>
              <span className="tag">14:02:11.204</span>&nbsp; shape{" "}
              <b>#7f3a</b> select_tool &nbsp;&nbsp;&nbsp; conf 0.96&nbsp;{" "}
              <span className="ok">compiled</span>
            </div>
            <div>
              <span className="tag">14:02:11.219</span>&nbsp; shape{" "}
              <b>#0c81</b> rerank &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              conf 0.71&nbsp; <span className="bail">deopt → frontier</span>
            </div>
            <div>
              <span className="tag">14:02:11.244</span>&nbsp; shape{" "}
              <b>#2b55</b> format_response conf 0.99&nbsp;{" "}
              <span className="ok">compiled</span>
            </div>
            <div>
              <span className="tag">14:02:11.281</span>&nbsp; shape{" "}
              <b>#a41e</b> score_draft &nbsp;&nbsp;&nbsp; conf 0.94&nbsp;{" "}
              <span className="ok">compiled</span>
            </div>
            <div>
              <span className="tag">14:02:12.006</span>&nbsp; shape{" "}
              <b>#0c81</b> drift 0.18 over 7d &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span className="bail">queued for retrain</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="price" id="pricing">
        <div className="wrap">
          <h2>You pay a share of what we save you.</h2>
          <p className="lede">
            Not a markup on tokens. Not a seat. Not a platform fee.
          </p>

          <div className="price-fig">28%</div>
          <p className="price-sub">
            of verified savings, measured against a baseline frozen and agreed
            in writing before the first optimization ships. If we save you
            nothing, the invoice is zero.
          </p>

          <div className="price-terms">
            <div className="term">
              <b>quality gate</b>
              <span>
                Savings only count while your outcome metric holds at or above
                the baseline. A cheaper answer that fails is not a saving.
              </span>
            </div>
            <div className="term">
              <b>audited</b>
              <span>
                Every invoice ships with the trace-level accounting behind it.
                Bring your own analyst.
              </span>
            </div>
            <div className="term">
              <b>no lock-in</b>
              <span>
                Month to month after the first quarter. Export your weights and
                your traces on the way out.
              </span>
            </div>
            <div className="term">
              <b>aligned</b>
              <span>
                A percentage router earns more when you waste more. We earn more
                only when your bill falls.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ownership ── */}
      <section id="ownership">
        <div className="wrap">
          <div className="head">
            <h2>What stays yours</h2>
            <p className="lede">
              The whole model depends on access to your traffic, so the terms
              around it are the product, not the fine print.
            </p>
          </div>

          <div className="own">
            <div>
              <h3>Your traffic trains your models only</h3>
              <p>
                Nothing is pooled. There is no shared model, no cross-customer
                training, and no case in which one account&apos;s data improves
                another account&apos;s results.
              </p>
            </div>
            <div>
              <h3>Open-weight foundations</h3>
              <p>
                Specialists are built on permissively licensed open-weight base
                models, chosen per shape for the size and latency the workload
                actually needs.
              </p>
            </div>
            <div>
              <h3>You own the weights</h3>
              <p>
                Every specialist Ravelyn builds for you is yours. Export the
                checkpoints whenever you want and run them on your own
                infrastructure or anyone else&apos;s.
              </p>
            </div>
            <div>
              <h3>Your provider relationships are untouched</h3>
              <p>
                You keep your own accounts, your own keys, your own commercial
                terms and your own rate limits. Ravelyn calls them on your
                behalf and never resells capacity.
              </p>
            </div>
            <div>
              <h3>Retention you set</h3>
              <p>
                Choose trace retention from zero to ninety days, with
                field-level redaction before anything is written. Zero retention
                disables compilation and keeps routing.
              </p>
            </div>
            <div>
              <h3>Inside your boundary</h3>
              <p>
                For regulated workloads, the profiler and the compiler run in
                your VPC and traces never leave it. In private preview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who this is for ── */}
      <section id="fit">
        <div className="wrap">
          <div className="head">
            <h2>Who this is for</h2>
            <p className="lede">
              The economics need volume and repetition. We would rather say so
              now than in month three.
            </p>
          </div>

          <div className="fit">
            <div className="yes">
              <h3>A good fit</h3>
              <ul>
                <li>
                  Agent products in coding, support, document processing or
                  outbound
                </li>
                <li>Roughly $500K to $20M of annual inference spend</li>
                <li>Long trajectories with many tool calls per task</li>
                <li>An existing outcome metric, even a crude one</li>
                <li>Gross margin that is a board-level conversation</li>
              </ul>
            </div>
            <div className="no">
              <h3>Not a fit yet</h3>
              <ul>
                <li>
                  Under a few million calls a month, where there is not enough
                  repetition to learn from
                </li>
                <li>Single-turn chat with no tool use</li>
                <li>Workloads where every prompt is genuinely novel</li>
                <li>
                  Teams that cannot grant any trace access, including redacted
                </li>
                <li>
                  Anyone who needs this live next week. Shadow mode takes two to
                  three weeks to be worth trusting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <div className="wrap narrow">
          <div className="head">
            <h2>Questions people actually ask</h2>
          </div>

          <details>
            <summary>What do I have to change in my code?</summary>
            <p>
              One base URL. The API is OpenAI-compatible, so your SDK calls,
              streaming, tool definitions and retries all behave the way they do
              today.
            </p>
          </details>
          <details>
            <summary>Will quality drop?</summary>
            <p>
              You set the floor and the guards enforce it. A compiled shape that
              cannot clear your confidence threshold hands the request back to
              the frontier model before anything is returned. If your outcome
              metric falls below baseline, the savings stop counting, which
              means our revenue stops too.
            </p>
          </details>
          <details>
            <summary>What happens when my prompts change?</summary>
            <p>
              Drift detection catches it, the affected shape deoptimizes back to
              the frontier path, and it queues for retraining against the new
              distribution. You will see it in the guard log before you see it
              in your metrics.
            </p>
          </details>
          <details>
            <summary>How much of my workload is actually compilable?</summary>
            <p>
              It varies more than any vendor will admit. Extraction,
              classification, schema coercion, reranking and tool selection
              compile well. Open-ended planning and long-context reasoning mostly
              do not. Send us a week of traces and the profile will tell you
              your number rather than an industry average.
            </p>
          </details>
          <details>
            <summary>Is this a router?</summary>
            <p>
              Routing is the first stage and the least interesting one. A router
              picks between models that already exist. A compiler builds the
              cheap path that did not exist before, using what the routing layer
              learned about your traffic.
            </p>
          </details>
          <details>
            <summary>What if we leave?</summary>
            <p>
              Export your weights and your traces, point the base URL back at
              your providers, and you are done. There is no migration, because
              your original integration was never removed.
            </p>
          </details>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final" id="profile">
        <div className="wrap">
          <h2>Send us a week of traces.</h2>
          <p className="lede">
            You get back a profile: your call-shape distribution, your
            compilable share, the modelled saving against your current spend,
            and the shapes we would compile first. No commitment, and you keep
            the analysis either way.
          </p>
          <div className="cta-row">
            <a className="btn btn-lg" href="mailto:profile@ravelyn.technology">
              profile@ravelyn.technology
            </a>
            <a className="btn btn-lg btn-ghost" href="#how">
              Read the technical overview
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className="wrap">
          <div className="foot-in">
            <a className="mark" href="#top">
              <Logo height={24} />
              <span className="mark-wordmark">Ravelyn</span>
            </a>
            <div className="foot-links">
              <a href="#how">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#ownership">What stays yours</a>
              <a href="#profile">Get a profile</a>
            </div>
          </div>
          <p className="smallprint">
            Ravelyn Technology, Inc., Delaware. All figures on this page
            describe a representative example workload and are illustrative
            rather than a performance guarantee. Actual results depend on your
            traffic, your prompts and your quality thresholds. Specialist models
            are trained on your own traffic and labeled outcomes using
            permissively licensed open-weight base models. Ravelyn does not
            resell third-party model capacity and does not train on customer
            data across accounts.
          </p>
        </div>
      </footer>
    </>
  );
}
