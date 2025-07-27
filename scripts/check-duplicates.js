#!/usr/bin/env node

// 检查答案重复性的脚本
const fs = require('fs');
const path = require('path');

// 读取答案文件
const answersPath = path.join(__dirname, '../src/data/answers.ts');
const content = fs.readFileSync(answersPath, 'utf8');

// 提取所有答案文本
const textMatches = content.match(/text:\s*"([^"]+)"/g);
const answers = textMatches ? textMatches.map(match => {
  const text = match.match(/text:\s*"([^"]+)"/)[1];
  return text;
}) : [];

console.log('🔍 答案重复性检查报告');
console.log('='.repeat(50));
console.log(`📊 总答案数量: ${answers.length}`);

// 检查重复
const duplicates = {};
const seen = new Set();

answers.forEach((answer, index) => {
  if (seen.has(answer)) {
    if (!duplicates[answer]) {
      duplicates[answer] = [];
    }
    duplicates[answer].push(index + 1);
  } else {
    seen.add(answer);
  }
});

// 报告结果
if (Object.keys(duplicates).length === 0) {
  console.log('✅ 没有发现重复的答案！');
  console.log('🎉 所有答案都是唯一的。');
} else {
  console.log('❌ 发现重复的答案:');
  Object.entries(duplicates).forEach(([text, positions]) => {
    console.log(`\n📝 重复答案: "${text}"`);
    console.log(`🔢 出现位置: ${positions.join(', ')}`);
  });
}

// 统计各类别数量
const categoryMatches = content.match(/category:\s*'([^']+)'/g);
const categories = categoryMatches ? categoryMatches.map(match => {
  return match.match(/category:\s*'([^']+)'/)[1];
}) : [];

const categoryCount = {};
categories.forEach(cat => {
  categoryCount[cat] = (categoryCount[cat] || 0) + 1;
});

console.log('\n📈 答案类别分布:');
console.log('-'.repeat(30));
Object.entries(categoryCount).forEach(([category, count]) => {
  const percentage = ((count / categories.length) * 100).toFixed(1);
  const emoji = {
    'positive': '🌟',
    'negative': '⚠️',
    'neutral': '⚖️',
    'mysterious': '🔮'
  }[category] || '❓';
  
  console.log(`${emoji} ${category}: ${count}条 (${percentage}%)`);
});

console.log('\n' + '='.repeat(50));
console.log('✨ 检查完成！');
