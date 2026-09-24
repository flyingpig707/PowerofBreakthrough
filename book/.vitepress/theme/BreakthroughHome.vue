<script setup lang="ts">
import { ref } from 'vue'

const coauthorPrompt = '阅读 https://github.com/flyingpig707/PowerofBreakthrough/tree/main/skills/power-of-breakthrough-coauthor 并参与《破圈力》共同写作'
const copied = ref(false)

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(coauthorPrompt)
  } catch {
    const input = document.createElement('textarea')
    input.value = coauthorPrompt
    input.setAttribute('readonly', '')
    input.style.position = 'fixed'
    input.style.opacity = '0'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.remove()
  }
  copied.value = true
  window.setTimeout(() => { copied.value = false }, 2400)
}

const capabilities = [
  { number: '01', title: '感知力', description: '听见圈外真实的声音，看见公众眼中的城市。' },
  { number: '02', title: '生成力', description: '让每座城市都拥有持续讲好故事的内容产能。' },
  { number: '03', title: '连接力', description: '让对的内容穿越圈层，抵达真正需要它的人。' },
  { number: '04', title: '进化力', description: '把每次实践沉淀为能力，让每一次出圈都为下一次蓄能。' },
]

const steps = [
  { number: '01', title: '说出观点', description: '把你对城市、传播或书稿的观察交给 Agent。' },
  { number: '02', title: 'Agent 阅读与整理', description: '阅读书稿与规则，确认贡献类型，形成结构化提案。' },
  { number: '03', title: 'Agent 完成自检', description: '检查路径、字段、来源、授权与正式书稿保护。' },
  { number: '04', title: '提交人工评审', description: '准备 Pull Request，进入公开提案库，等待作者与社区评审。' },
]
</script>

<template>
  <main class="breakthrough-home">
    <section class="signal-hero" aria-labelledby="home-title">
      <div class="signal-hero__copy">
        <div class="eyebrow-row">
          <span>POWER OF BREAKTHROUGH</span><span class="eyebrow-rule" aria-hidden="true"></span><span>开放共写 · 面向更好的城市</span>
        </div>
        <h1 id="home-title"><strong>破圈力</strong><span>让城市被AI看见</span></h1>
        <p class="signal-hero__tagline">从偶然出圈到系统生长</p>
        <p class="signal-hero__authors">任国刚 · 吴鹏 著</p>
        <div class="signal-actions">
          <a class="signal-button signal-button--primary" href="/01-%E5%89%8D%E8%A8%80%20%E7%A0%B4%E5%9C%88%E7%BC%98%E8%B5%B7">开始阅读</a>
          <a class="signal-button signal-button--secondary" href="#coauthor">参与共同写作</a>
        </div>
      </div>

      <div class="signal-hero__visual">
        <img src="/assets/city-signal-blueprint.png" alt="城市天际线与信息连接轨迹构成的蓝图" />
        <p class="visual-kicker">AI MAKES<br />CITIES VISIBLE</p>
        <p class="visual-statement">更真实的城市<br />被看见、被理解、被选择</p>
        <p class="visual-caption">从人看见城市<br />到城市被 AI 看见</p>
      </div>
    </section>

    <section class="capability-strip" aria-label="破圈力四力模型">
      <article v-for="capability in capabilities" :key="capability.number" class="capability-item">
        <span class="section-number">{{ capability.number }}</span>
        <div><h2>{{ capability.title }}</h2><p>{{ capability.description }}</p></div>
      </article>
    </section>

    <section id="coauthor" class="coauthor-section" aria-labelledby="coauthor-title">
      <div class="coauthor-heading">
        <p class="section-kicker">AGENT-NATIVE COAUTHORING</p>
        <h2 id="coauthor-title">只管说出你的观点，剩下的交给 Agent。</h2>
        <p>无需整理格式、研究规则或熟悉 GitHub。WorkBuddy、Codex 或其他具备 GitHub 能力的 Agent，会帮助你阅读书稿、确认贡献类型、形成结构化提案、完成自检并准备 Pull Request。</p>
      </div>

      <div class="coauthor-workflow">
        <div class="prompt-box">
          <code>{{ coauthorPrompt }}</code>
          <button type="button" :aria-label="copied ? '参与指令已复制' : '复制参与指令'" @click="copyPrompt">{{ copied ? '已复制' : '复制参与指令' }}</button>
        </div>

        <ol class="coauthor-steps">
          <li v-for="step in steps" :key="step.number">
            <span class="step-number">{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.description }}</p>
          </li>
        </ol>

        <div class="contribution-types">
          <span>你可以这样参与</span><p>勘误 · 证据补充 · 案例 · 工具改进 · 段落改写 · 新章节提案</p>
        </div>

        <nav class="coauthor-links" aria-label="共同写作延伸入口">
          <a href="https://github.com/flyingpig707/PowerofBreakthrough/tree/main/skills/power-of-breakthrough-coauthor">阅读 Agent Skill</a>
          <a href="https://github.com/flyingpig707/PowerofBreakthrough/issues/new?template=contribution-idea.yml">先讨论一个想法</a>
          <a href="https://github.com/flyingpig707/PowerofBreakthrough/tree/main/contributions">查看公开提案库</a>
        </nav>
      </div>
    </section>

    <section class="about-book" aria-labelledby="about-title">
      <p class="section-kicker">ABOUT THE BOOK</p>
      <h2 id="about-title">不是一次爆红的方法，<br />而是一座城市持续生长的能力。</h2>
      <p>《破圈力》从传统城市营销的失效出发，提出感知力、生成力、连接力和进化力四力模型，并进一步讨论组织建设、量化评估与城市共生。</p>
      <a class="text-link" href="/00-%E5%B0%81%E9%9D%A2">查看全书目录</a>
    </section>
  </main>
</template>
