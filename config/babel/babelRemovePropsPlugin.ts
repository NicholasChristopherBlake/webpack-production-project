import { PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      // to be able to pass props
      Program(path, state) {
        // Props that we need to remove
        const forbidden = state.opts.props || [];

        path.traverse({
          // Write AST Node type here
          // This one is for props
          JSXIdentifier(current) {
            // get the name of this props and remove it
            const nodeName = current.node.name;
            if (forbidden.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
