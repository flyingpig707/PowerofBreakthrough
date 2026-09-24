# Design QA — 《破圈力》首页与共同写作入口

## Evidence

- Source visual truth: `/Users/wu/.codex/generated_images/01a0d10e-35cc-7a21-aeca-a108b9bb3c15/exec-f0346b2a-3339-4392-ac1d-d8cb6bc81856.png`
- Source pixels: 1536 × 1024.
- Implementation: `http://localhost:4173/`.
- Implementation screenshots: Codex in-app Browser tab 7 inline captures in the task, desktop and mobile states.
- Desktop viewport request: 1440 × 1024. Browser runtime reported 1800 × 1280 CSS pixels at DPR 0.8, normalized to 1440 × 1024 physical pixels.
- Mobile viewport request: 390 × 844. Browser runtime reported 487 × 1055 CSS pixels at DPR 0.8, normalized to approximately 390 × 844 physical pixels.
- State: light theme, homepage, initial and `#coauthor` anchor states.

## Findings

No actionable P0, P1, or P2 mismatch remains.

- Typography: the source hierarchy is preserved with a Song-style Chinese display face, sans-serif UI copy, monospaced English micro-labels, and matching scale contrast. The confirmed headline replaces the discarded mock wording intentionally.
- Spacing and layout: the desktop two-column hero, four-part capability rail, split coauthor block, prompt bar, and four-step workflow follow the selected composition. The mobile layout stacks without horizontal overflow.
- Colors and tokens: cobalt, paper white, near-black, and coral action accent map consistently to shared CSS variables. Contrast remains legible in the dark coauthor section.
- Image quality: the hero uses a dedicated 1681 × 936 raster city blueprint asset in the selected art direction; it is sharp at desktop and mobile sizes and is not recreated with CSS or placeholder art.
- Copy and content: author names, book proposition, Agent promise, contribution prompt, four-step workflow, contribution types, and repository links are present and accurate.
- Interaction and accessibility: primary reading and anchor links work; the copy control exposes a state change from `复制参与指令` to `已复制`; semantic headings, sections, navigation labels, button labels, and image alt text are present.

## Comparison History

### Pass 1

- Source and rendered homepage were opened and visually compared at the desktop target.
- The implementation preserves the selected design’s major-region proportions and information hierarchy.
- Intentional differences: the city illustration is more detailed than the mock; the coauthor headline uses the user-approved message; an `关于本书` closing section continues below the selected frame.
- No P0/P1/P2 fix was required.

### Responsive pass

- Mobile rendering was captured after applying the mobile viewport override.
- Measured horizontal overflow: none (`scrollWidth === innerWidth`).
- Copy button remained visible and no browser console warnings or errors were recorded.

### Annotation pass

- Removed the forced break from the coauthor headline and reduced the desktop display size so the sentence balances naturally; the current reviewed viewport renders it on one line.
- Raised the prompt text specificity to forced white on the navy surface; computed color is `rgb(255, 255, 255)`.
- Removed inherited ordered-list markers so the workflow now shows only the intentional `01–04` numbering.
- Replaced the chapter footer’s direct GitHub edit action with `用 Agent 参与共同写作`; verified that it resolves from a chapter to the local `/#coauthor` explanation before asking readers to use any external tool.

## Focused Region Comparison

Focused checks were performed for the hero typography/action group, hero image crop, copy-prompt control, four-step workflow, and mobile first screen. These regions carry the design’s main fidelity and interaction requirements; no additional focused crop was needed.

## Primary Interactions Tested

- `开始阅读` target resolves to the preface route.
- `共同写作` scrolls to `#coauthor`.
- `复制参与指令` changes to the success state `已复制`.
- Agent Skill, contribution-Issue, and public-proposal links resolve to the intended GitHub paths.
- Browser console: no errors or warnings.

## Follow-up Polish

- P3: exact Song-style glyph metrics vary by operating system because the implementation intentionally uses system Chinese fonts instead of downloading another webfont.

## Final Result

final result: passed
