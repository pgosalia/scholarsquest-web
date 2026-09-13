// Scholar's Quest — small vanilla-JS behaviors (no framework needed)

// Plain-language topic definitions shown when a grade-band topic chip is
// tapped on the Math and English pages. Copied verbatim from the design.
var TOPICS = {
  // Math K–5
  'Number sense': 'Knowing what numbers mean, not just how to write them: that 40 is close to 38, that 7 × 6 must land near 42. It is the difference between a child who checks an answer and one who hands in 380.',
  'Times tables': 'Instant recall of multiplication facts up to 12 × 12, drilled in short bursts. Once these are automatic, long division and fractions stop feeling impossible.',
  'Fractions': 'Halves, quarters, thirds — comparing them, adding them, and seeing why 1/3 is bigger than 1/4 even though 4 is bigger than 3. Usually the first place a child decides maths is "not for them".',
  'Word problems': 'Turning a sentence into a sum. "There are 24 pencils shared between 4 tables" — the maths is easy, reading it is the hard part, so we practise the reading.',
  'Measurement': 'Length, weight, money, time and the units that go with them. Reading a ruler, working out change, telling how long until half past.',
  // Math 6–8
  'Ratios & percent': 'Comparing quantities and scaling them: 3 parts flour to 1 part water, 20% off £45, a recipe doubled. The same idea in three disguises, which is exactly why it trips students up.',
  'Pre-algebra': 'Letters standing in for numbers. Solving 3x + 5 = 20, working with negatives and exponents — the grammar that everything in high school maths is written in.',
  'Geometry': 'Angles, area, perimeter, volume and the properties of shapes. Why the angles in a triangle always add to 180, and how to find the area of a shape nobody gave you a formula for.',
  'Data & graphs': 'Reading and building bar charts, line graphs and scatter plots, plus mean, median and mode. Mostly: what a graph is actually claiming, and whether it is fair.',
  'State testing': 'Practice against the real format of your state assessment — question types, pacing, and the calculator rules — so the test itself is not the surprise.',
  // Math 9–12
  'Algebra II': 'Quadratics, polynomials, logarithms and functions. The year where maths stops being arithmetic with letters and starts being about relationships between quantities.',
  'Trigonometry': 'Sine, cosine and tangent — the maths of triangles and anything that repeats, from ramps and roof pitches to sound waves.',
  'Pre-calculus': 'Functions, sequences, limits and the unit circle: the toolkit assembled so that calculus in the autumn is a new idea, not a new language.',
  'Calculus': 'Rates of change (derivatives) and accumulation (integrals). How fast something is moving right now, and how far it has travelled altogether. AP Calculus AB and BC included.',
  'Statistics': 'Distributions, probability, sampling and inference — deciding what a set of data can honestly be said to prove. Includes AP Statistics free-response practice.',
  // English K–5
  'Phonics': 'Matching letters and letter groups to sounds, then blending them into words. The route from "c-a-t" to reading "cat" without pausing.',
  'Fluency': 'Reading aloud at a natural pace with expression, not word by word. A fluent reader has attention left over to think about the meaning.',
  'Vocabulary': 'Building the stock of words a child knows and uses, and the habit of working out an unfamiliar one from the sentence around it.',
  'Sentences': 'Capital letters, full stops, and a complete thought. Turning "went the park" into "We went to the park after lunch."',
  'Spelling': 'Patterns rather than memorised lists: why it is "hopping" but "hoping", and what to do with words that break the rules.',
  // English 6–8
  'Comprehension': 'Understanding what a text says, then what it implies. Finding the main idea, using evidence, and answering the question that was actually asked.',
  'Grammar': 'Punctuation, tenses, and agreement — comma splices, its vs it’s, sentences that lose their subject halfway. Taught inside their own writing, not on worksheets.',
  'Essay structure': 'A paragraph that makes one point and proves it, then five of them in the right order. Introduction, body, conclusion, with a thread running through.',
  'Creative writing': 'Stories and descriptive writing: character, setting, tension, and an ending that is not "then I woke up".',
  'Speaking': 'Reading aloud, explaining an idea, and answering a question in full sentences. Low-stakes practice for the class presentations that are not.',
  // English 9–12
  'Literary analysis': 'Reading a text closely and saying something arguable about it: how imagery, structure or narrator shape what a reader takes away — with quotes as evidence.',
  'Thesis writing': 'A single sentence that makes a claim someone could disagree with, and an essay that earns it. The fix for essays that summarise instead of arguing.',
  'Rhetoric': 'How a speech or article persuades — appeals, tone, structure, and loaded word choice. The core of AP Language and of the SAT reading passages.',
  'Timed essays': 'Planning in four minutes and writing in forty. A repeatable process for exam essays, practised under the clock.',
  'Presentations': 'Structuring a talk, holding eye contact, and handling questions without freezing. Rehearsed one-to-one before it counts.'
};

document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Testimonial carousel
  var quotes = document.querySelectorAll("[data-quote]");
  var dots = document.querySelectorAll("[data-dot]");
  var nameEl = document.querySelector("[data-quote-name]");
  var roleEl = document.querySelector("[data-quote-role]");
  if (quotes.length) {
    var idx = 0;
    var timer;
    function show(i) {
      idx = (i + quotes.length) % quotes.length;
      quotes.forEach(function (q, n) {
        q.hidden = n !== idx;
        if (n === idx) {
          if (nameEl) nameEl.textContent = q.getAttribute("data-name") || "";
          if (roleEl) roleEl.textContent = q.getAttribute("data-role") || "";
        }
      });
      dots.forEach(function (d, n) { d.classList.toggle("active", n === idx); });
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { show(idx + 1); }, 8000);
    }
    dots.forEach(function (d, n) {
      d.addEventListener("click", function () { show(n); restart(); });
    });
    var prevBtn = document.querySelector("[data-quote-prev]");
    var nextBtn = document.querySelector("[data-quote-next]");
    if (prevBtn) prevBtn.addEventListener("click", function () { show(idx - 1); restart(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { show(idx + 1); restart(); });
    show(0);
    restart();
  }

  // Topic chips: tap to open a plain-language definition inside that
  // grade-band card; tap the same chip again (or a chip in the same panel
  // group) to close/replace it.
  document.querySelectorAll("[data-topic-group]").forEach(function (group) {
    var chips = group.querySelectorAll("[data-topic]");
    var panel = group.querySelector("[data-topic-panel]");
    var titleEl = panel ? panel.querySelector("[data-topic-title]") : null;
    var bodyEl = panel ? panel.querySelector("[data-topic-body]") : null;
    var openTopic = null;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var name = chip.getAttribute("data-topic");
        if (openTopic === name) {
          openTopic = null;
          panel.hidden = true;
          chips.forEach(function (c) { c.classList.remove("is-active"); });
          return;
        }
        openTopic = name;
        titleEl.textContent = name;
        bodyEl.textContent = TOPICS[name] || '';
        panel.hidden = false;
        chips.forEach(function (c) { c.classList.toggle("is-active", c === chip); });
      });
    });
  });

  // Placeholder forms: show a success state client-side.
  // These do NOT submit anywhere yet -- wire the form's `action` up to
  // Formspree/Getform/your booking system, then this can go away or stay
  // as an optimistic UI while the real request goes out.
  document.querySelectorAll("form[data-placeholder-form]").forEach(function (form) {
    var successId = form.getAttribute("data-success-target");
    var success = successId ? document.getElementById(successId) : null;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (success) {
        form.hidden = true;
        success.hidden = false;
      }
    });
    var resetBtn = success ? success.querySelector("[data-form-reset]") : null;
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        success.hidden = true;
        form.hidden = false;
        form.reset();
      });
    }
  });
});
