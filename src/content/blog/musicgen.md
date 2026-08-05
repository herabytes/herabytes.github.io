---
# Copy this file, rename it (e.g. my-new-post.md), and fill it in.
# The filename becomes the URL slug: /blog/my-new-post
# NOTE: files starting with "_" (like this one) are NOT published.
title: 'MusicGen Activations'
date: 2026-08-03           # YYYY-MM-DD
description: 'One-sentence summary shown in listings and link previews.'
tags: ['Mech interp', 'ML']               # any of: ML, engineering, ... add your own
draft: false               # set true to hide from the live site while writing
---

# Experimenting with MusicGen

*July 2026*

I wanted to know if music models can be explainable. As a lyricist I'm most concerned with how lyrics are put to music. Does Suno know that it chose the ending word of a like e.g. "again": weigh up the rhyme scheme, the type of rhyme (perfect vs assonance), or if the stressed syllable lines up with the downbeat?

And is it capable of discovering novel rhymes that fit the lyrics? Cuz I know it's an awesome feeling when some words come to you to describe exactly what you're thinking. The existence of such algorithm discovered by a model would take the magic away. (Maybe we shouldn't do interp on music models and just refuse to use them.)

Another thing I am interested in is, do AI assisted music making give the same mental benefits. Although that is psych dept.

---
## The experiment
Claude suggested that I give myself a taste of doing interp on music models. So I agreed to look at MusicGen's internal activations with a notebook it wrote. 

Before taking my Trinity B1 test, I hopped into the CS lab, found a machine that would turn on, remembered my login details and loaded it up. Linux system. Commands to check GPU VRAM and real storage available. Installing packages. oh, allocated space running out, oh another email saying it's full? Ah, *runs commands to install on local machine temp storage and not my account file store*.

There we go, it is running something - out pops a music file for "happy music". Changed it to use CPU just to see how much slower it is… yeah stopped it had no patience.

Then another file has a hook function. No clue why everything has so many wrappers.

---

The second file takes the activations of a happy prompt and sad prompt and computes cosine similarity by layer. They clearly diverge, which could imply different processing of sentiment, but it is not meaningful since it could be attributed to just a different token.

 So for our question of semantics we have nothing.

To test the particular concept, we might use linear probing like the original paper, and ablation to see where it would fail to identify sentiment and cause similar activations.

How useful this is remains a question for the exploration itself to answer as it grows.
