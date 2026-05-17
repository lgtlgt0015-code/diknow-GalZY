---
title: "关于"
slug: "about"
description: "关于本站与作者"
---

<style>
    .about-prose {
        max-width: 720px;
        margin: 0 auto;
        padding: clamp(24px, 4vw, 56px) clamp(20px, 3vw, 40px);
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 100%
        );
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        backdrop-filter: blur(20px) saturate(160%);
        -webkit-backdrop-filter: blur(20px) saturate(160%);
        box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        animation: aboutFade 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        opacity: 0;
    }

    .about-prose p {
        font-size: clamp(1.5rem, 1.6vw, 1.7rem);
        line-height: 1.95;
        margin: 0 0 1.4em 0;
        color: rgba(229, 231, 235, 0.92);
        letter-spacing: 0.02em;
    }

    .about-prose p:last-child {
        margin-bottom: 0;
        background: linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 50%, #f0abfc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 600;
        font-size: clamp(1.6rem, 1.8vw, 1.9rem);
        letter-spacing: 0.04em;
    }

    .about-prose s,
    .about-prose del {
        opacity: 0.55;
        text-decoration-color: rgba(244, 114, 182, 0.7);
        text-decoration-thickness: 1.5px;
    }

    .about-prose em,
    .about-prose .dim {
        font-style: normal;
        color: rgba(165, 180, 252, 0.85);
    }

    @keyframes aboutFade {
        from { opacity: 0; transform: translateY(18px); filter: blur(6px); }
        to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
    }
</style>

<div class="about-prose">

此网站是我基于 Hugo 搭建的一个 Galgame 资料站与个人项目，目前使用静态页面架构部署在 Cloudflare Pages 上。<s>仍在尝试更换 js 后端</s>

我第一次接触 galgame 大概就是在初中，那时候一个月姬 re 可以玩一周，现在 ctrl 按到底甚至都打不完 9nine 了（雾）

那时候听不懂贴吧里大佬们讨论的 Scenario Writer，经常问一堆被吧务警告，也不理解为什么有那么多邪典被束之高阁

所以到现在我最喜欢的还是那几部 asa 的神人大乱斗（而且至今还没碰过 fsn，乐）

我现在依然并不成熟

但至少，已经不再只是那个坐在电脑前、第一次点开 exe 的，脑海里模糊而朦胧的幻想了

</div>
