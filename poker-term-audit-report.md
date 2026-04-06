# Comprehensive Poker Term Audit Report

**Generated:** 2026-04-05  
**Total Transcript Files Scanned:** 1,171  
**Scan Coverage:** All courses in `/courses/*/transcripts/*.txt`

---

## Executive Summary

This audit identified critical mistranscription patterns where Whisper ASR (Automatic Speech Recognition) consistently misheard poker terminology. The findings reveal both HIGH-confidence fixes (phonetically obvious mistakes) and MEDIUM-confidence patterns (context-dependent) that affect transcript quality.

**Key Findings:**
- **882 instances** of "for bet" that should be "four-bet" 
- **1,311 instances** of "low jack" vs 195 correct "lojack" 
- **102 instances** of "high jack" vs 969 correct "hijack"
- **19 instances** of "equal lab" vs 40 correct "EquiLab"
- **7 instances** of "chippy" vs 92 correct "chip EV"
- **35 instances** of "not advantage" vs 3,526 correct "nut advantage"
- **64 instances** of "see bet" that should be "c-bet"

---

## Comprehensive Poker Glossary

### POSITIONS

| Term | Correct Spelling | Notes |
|------|-------------------|-------|
| UTG | UTG | Under the Gun - first to act preflop |
| UTG+1 | UTG+1 | Under the Gun plus 1 |
| UTG+2 | UTG+2 | Under the Gun plus 2 |
| Lo Jack / Lojack | lojack | **CRITICAL FIX:** Often transcribed as "low jack" (1,311 vs 195 correct) |
| Hi Jack / Hijack | hijack | **CRITICAL FIX:** Often transcribed as "high jack" (102 vs 969 correct) |
| Cutoff | cutoff | **CRITICAL FIX:** Often transcribed as "cut off" (200 vs 1,542 correct) |
| Button | button/BTN | Also: "BTN", "the button" |
| Small Blind | small blind/SB | Also: "SB" |
| Big Blind | big blind/BB | Also: "BB" |
| Blind vs Blind | BvB | Head-to-head from the blinds (108 matches) |

### BETTING ACTIONS

| Term | Correct Spelling | Mistranscription | Count |
|------|-------------------|-------------------|-------|
| 3-Bet | three-bet / 3-bet | "free bet" (minor) | 10 / 7,094 correct |
| 4-Bet | four-bet / 4-bet | **"for bet"** | 882 / 1,173 correct |
| 5-Bet | five-bet / 5-bet | (no major issues found) | ~50+ |
| C-Bet | c-bet / continuation bet | **"see bet", "sea bet"** | 64 / 520 correct |
| Continuation Bet | continuation bet | (standard transcription good) | 1,231 |
| Donk Bet | donk bet | "donkey bet" (0 found - good!) | 7 |
| Check-Raise | check-raise | (standard - 3,189 instances) | 3,189 |
| Limp | limp | (standard - 2,086 instances) | 2,086 |
| Open-Raise | open-raise | (minor - 22 instances) | 22 |
| Squeeze | squeeze | (standard - 248 instances) | 248 |
| Cold Call | cold call | (standard - 154 instances) | 154 |
| Cold 4-Bet | cold 4-bet | (standard - 18 instances) | 18 |
| Jam / Shove | jam / shove | (standard - 4,424 instances) | 4,424 |
| Overbet | overbet | (standard - 390 instances) | 390 |
| Underbet | underbet | (0 found - excellent) | 0 |
| Min-Raise | min-raise / min raise | (standard - 443 instances) | 443 |

### STRATEGIC CONCEPTS

| Term | Correct Spelling | Mistranscription | Count |
|------|-------------------|-------------------|-------|
| GTO | GTO / Game Theory Optimal | (standard transcription) | 1,834 |
| EV | EV / Expected Value | (standard - 645 instances) | 645 |
| ICM | ICM / Independent Chip Model | (standard - 529 instances) | 529 |
| SPR | SPR / Stack-to-Pot Ratio | (standard - 564 instances) | 564 |
| MDF | MDF / Minimum Defense Frequency | (standard - 237 instances) | 237 |
| Equity | equity | (standard - 6,162 instances) | 6,162 |
| Pot Odds | pot odds | (standard - 545 instances) | 545 |
| Implied Odds | implied odds | **"implied ods", "implied auts"** (minor) | 681 |
| Reverse Implied | reverse implied | (standard - 68 instances) | 68 |
| Range Advantage | range advantage | (standard - 1,082 instances) | 1,082 |
| **Nut Advantage** | **nut advantage** | **"not advantage"** | **35 / 3,526** |
| Blocker | blocker | "blacker" (0 found - excellent!) | 1,015 |
| Combo / Combos | combo / combos | (standard - 1,012 instances) | 1,012 |
| Polarized | polarized | (standard - 1,425 instances) | 1,425 |
| Linear | linear | (standard - 473 instances) | 473 |
| Merged | merged | (standard - 5 instances) | 5 |
| Balanced | balanced | (standard - 265 instances) | 265 |
| Exploitative | exploitative | (standard - 351 instances) | 351 |
| Variance | variance | (standard - 167 instances) | 167 |
| Standard Deviation | standard deviation | (standard - 3 instances) | 3 |

### HAND TYPES

| Term | Correct Spelling | Count |
|------|-------------------|-------|
| Suited Connectors | suited connectors | 530 |
| Suited Gappers | suited gappers | 53 |
| Broadway | broadway | 402 |
| Pocket Pairs | pocket pairs | 314 |
| Offsuit | offsuit | 5,089 |
| Suited | suited | 9,807 |
| AKo | AKo | 3 |
| AKs | AKs | 103 |
| Overpair | overpair / over pair | 813 |
| Underpair | underpair / under pair | 345 |

### BOARD TEXTURES

| Term | Correct Spelling | Count |
|------|-------------------|-------|
| Monotone | monotone | 153 |
| Rainbow | rainbow | 156 |
| Paired | paired | 470 |
| Dry Board | dry | 127 |
| Wet Board | wet | 49 |
| Coordinated | coordinated | 194 |
| Disconnected | disconnected | 71 |
| Dynamic | dynamic | 680 |
| Static | static | 255 |

### SOFTWARE & TOOLS

| Tool | Correct Spelling | Mistranscription | Count |
|------|-------------------|-------------------|-------|
| EquiLab | EquiLab | **"equal lab", "equallab"** | 19 / 40 |
| Holdem Manager | Holdem Manager / HEM | **"hold a manager", "hold them manager"** | 4 / 5,425 |
| Poker Tracker | Poker Tracker | **"poker tractor"** (0 found) | 24 |
| PIO Solver | PIO | (standard - 115 instances) | 115 |
| GTO Wizard | GTO Wizard | (standard - 5 instances) | 5 |
| Simple Preflop | Simple Preflop | (standard - 4 instances) | 4 |
| ICMIZER | ICMIZER | **"ice miser", "ICM izer"** (0 found) | 45 |
| MonkerSolver | MonkerSolver | **"monkey solver"** (0 found) | 1 |

### OTHER POKER TERMS

| Term | Correct Spelling | Mistranscription | Count |
|------|-------------------|-------------------|-------|
| Chip EV | chip EV | **"chippy", "chip pv"** | 7 / 92 |
| Pot-Sized | pot-sized | (standard - 113 instances, "pot size" - 329) | 442 |
| Flat Call | flat call | "flak call" (0 found) | 104 |
| Nit | nit | (standard - 73 instances) | 73 |
| Maniac | maniac | (standard - 221 instances) | 221 |
| Calling Station | calling station | (standard - 264 instances) | 264 |
| LAG | LAG / Loose Aggressive | (standard - 63 instances) | 63 |
| TAG | TAG / Tight Aggressive | (standard - 107 instances) | 107 |
| Tight Aggressive | tight aggressive | (standard - 151 instances) | 151 |
| Loose Aggressive | loose aggressive | (standard - 110 instances) | 110 |
| Bubble | bubble | (standard - 385 instances) | 385 |
| Final Table | final table | (standard - 354 instances) | 354 |
| ITM / In the Money | in the money / ITM | (standard - 302 instances) | 302 |
| Heads-Up | heads-up / HUNL | (standard - 1,081 instances) | 1,081 |
| 6-Max | 6-max | (standard - 74 instances) | 74 |
| 8-Max | 8-max | (standard - 9 instances) | 9 |
| Full Ring | full ring | (standard - 22 instances) | 22 |
| Sit-and-Go | sit-and-go / SNG | (standard - 37 instances) | 37 |
| PartyPoker | PartyPoker | (standard - 34 instances) | 34 |
| PokerStars | PokerStars | (standard - 26 instances) | 26 |
| Turbo | turbo | (standard - 52 instances) | 52 |
| MTT | MTT / Multi-Table Tournament | (standard - 22 instances) | 22 |

---

## Mistranscription Findings by Confidence Level

### HIGH CONFIDENCE (Safe to Auto-Fix)

These are clear phonetic mishearings with unambiguous corrections.

| Mistranscription | Should Be | File Count | Confidence | Reason |
|------------------|-----------|-----------|------------|--------|
| **for bet** | **four-bet** | 882 | HIGH | "for" and "four" are homophones; context indicates betting action |
| **low jack** | **lojack** | 1,311 | HIGH | Clear phonetic mishearing; poker position terminology |
| **high jack** | **hijack** | 102 | HIGH | Clear phonetic mishearing; poker position terminology |
| **cut off** | **cutoff** | 200 | HIGH | Two-word vs one-word standard; occurs in poker position context |
| **see bet** | **c-bet** | 64 | HIGH | Clear phonetic match (see = c); poker action context |
| **sea bet** | **c-bet** | (included in above) | HIGH | Alternative pronunciation of "c" |
| **equal lab** | **EquiLab** | 19 | HIGH | Clear mishearing of software name; always used as poker tool reference |
| **not advantage** | **nut advantage** | 35 | MEDIUM-HIGH | Common poker concept; slight mishearing; context determines |
| **chippy** | **chip EV** | 7 | MEDIUM | Less certain - could be typo or context variation |
| **hold a manager** | **Holdem Manager** | 4 | HIGH | Software name mishearing; very rare in modern transcripts |

### MEDIUM CONFIDENCE (Probably Safe)

These are likely correct, but should be reviewed in context by domain expert.

| Mistranscription | Should Be | File Count | Confidence | Reason |
|------------------|-----------|-----------|------------|--------|
| **free bet** | **three-bet** | 10 | MEDIUM | Could be legitimate phrase "free betting"; need context |
| **chip pv** | **chip EV** | 2 | MEDIUM | Unusual transcription; context-dependent |
| **pot size** | **pot-sized** | 329 | LOW-MEDIUM | Both forms used correctly in transcript; not an error |

### LOW CONFIDENCE (Requires Manual Review)

These may not be errors or have context-dependent validity.

| Term | Notes | Count |
|------|-------|-------|
| **pot size** | Can legitimately refer to the size of the pot OR pot-sized bet; both grammatically correct | 329 |
| **implied ods** | Minimal transcription error rate (681 correct vs potential errors) | minimal |

---

## Statistics Summary

### Scanning Results
- **Total Transcript Files:** 1,171
- **Date Scanned:** 2026-04-05
- **Total Scan Queries:** 50+

### Error Distribution
- **HIGH Confidence Errors:** ~2,613 instances
  - "for bet" → "four-bet": 882
  - "low jack" → "lojack": 1,311  
  - "high jack" → "hijack": 102
  - "cut off" → "cutoff": 200
  - "see/sea bet" → "c-bet": 64
  - "equal lab" → "EquiLab": 19
  - "not advantage" → "nut advantage": 35

- **MEDIUM Confidence Errors:** ~12 instances
  - "free bet" → "three-bet": 10
  - "chip pv/chippy" → "chip EV": 7

- **Total Correctable Errors:** ~2,625+
- **Percentage of Corpus:** ~0.22% (substantial for quality audit)

---

## Verification Status

### Terms with ZERO Issues Found
- ✅ "donkey bet" (0 occurrences - "donk bet" always correct)
- ✅ "blacker" (0 occurrences - "blocker" always correct)
- ✅ "flak call" (0 occurrences - "flat call" always correct)
- ✅ "poker tractor" (0 occurrences - "poker tracker" always correct)
- ✅ "monkey solver" (0 occurrences - "MonkerSolver" always correct)
- ✅ "underbet" (0 occurrences - term rarely used)
- ✅ "when a max" (0 occurrences - "Winamax" not commonly referenced)

### Terms with Excellent Transcription Quality (98%+)
- ✅ Holdem Manager: 5,425 correct vs 4 errors (99.93%)
- ✅ GTO: 1,834 instances (no major variants)
- ✅ Solver: 1,354 instances (no "salver" issues)
- ✅ Equity: 6,162 instances (standard spelling)
- ✅ Check-raise: 3,189 instances (standard spelling)
- ✅ Nut Advantage: 3,526 correct vs 35 errors (98.99%)

---

## Recommendations

### Phase 1: AUTO-FIXES (Safe, HIGH Confidence)
Apply these programmatically with word-boundary matching:

1. `\bfor bet\b` → `four-bet` (882 instances)
2. `\blow jack\b` → `lojack` (1,311 instances)
3. `\bhigh jack\b` → `hijack` (102 instances)
4. `\bcut off\b` (in poker context) → `cutoff` (200 instances)
5. `\b(see|sea) bet\b` → `c-bet` (64 instances)
6. `\bequal lab\b` → `EquiLab` (19 instances)
7. `\bnot advantage\b` → `nut advantage` (35 instances in poker context)

**Expected Impact:** ~2,613 corrections across 1,171 files

### Phase 2: MANUAL REVIEW (MEDIUM Confidence)
- Review "free bet" instances (10) - context check for three-bet vs legitimate free betting
- Review "chip pv/chippy" instances (7) - confirm these should be "chip EV"

### Phase 3: STANDARDIZATION
Consider future guidelines:
- Standardize "pot-sized" vs "pot size" usage
- Document position abbreviations (UTG, CO, BTN, SB, BB, LJ, HJ, etc.)
- Establish preferred capitalization (GTO vs gto, EV vs ev)

---

## Next Steps

A Python script (`fix_poker_terms.py`) has been generated that:
1. ✅ Implements all HIGH-confidence auto-fixes
2. ✅ Supports dry-run mode for preview
3. ✅ Processes all 1,171 transcript files
4. ✅ Provides detailed change reporting
5. ✅ Can be re-run safely (idempotent)

Run with: `python fix_poker_terms.py --dry-run` to preview changes before applying.
