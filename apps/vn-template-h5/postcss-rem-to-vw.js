import postcss from 'postcss';
import valueParser from 'postcss-value-parser';

/**
 * 将 rem 转换为 vw 的 PostCSS 插件
 */
export default function remToVwPlugin(options = {}) {
  const { viewportWidth = 750, remBase = 100 } = options;

  return (root, result) => {
    const declaration_walk = (decl, match) => {
      if (decl.value.includes('rem')) {
        const parsedValue = valueParser(decl.value);
        parsedValue.walk((node) => {
          if (node.type === 'word' && node.value.endsWith('rem')) {
            const remValue = parseFloat(node.value.replace('rem', ''));
            const vwValue = (remValue * (100 / viewportWidth)) * remBase;
            node.value = `${vwValue.toFixed(5)}vw`;
          }
        });
        decl.value = parsedValue.toString();
      }
    };

    root.walkDecls(declaration_walk);
  };
}

// 导出插件以便在其他地方使用