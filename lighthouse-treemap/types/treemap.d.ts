// import _Util2 = require('webtreemap-cdt'); // TODO: types.
import _Util = require('../app/src/util.js');
import '../../types/lhr';
import '../../types/audit-details';

declare global {
  module Treemap {
    interface Options {
      lhr: LH.Result;
    }

    interface RootNodeContainer {
      /** Arbitrary name identifier. Usually a script url. */
      name: string;
      node: Node;
    }

    interface Node {
      /** Arbitrary name identifier. Usually a path component from a source map. */
      name: string;
      resourceBytes: number;
      unusedBytes?: number;
      /** If present, this module is a duplicate. String is normalized source path. See ModuleDuplication.normalizeSource */
      duplicatedNormalizedModuleName?: string;
      children?: Node[];
    }
  }

  interface WebTreeMapOptions {
    padding: [number, number, number, number];
    spacing: number;
    caption(node: Treemap.Node): string;
    showNode?(node: Treemap.Node): boolean;
  }

  var webtreemap: {
    render(el: HTMLElement, data: any, options: WebTreeMapOptions): void;
    sort(data: any): void;
  };

  var Util: typeof _Util;

  interface Window {
    __treemapOptions?: Treemap.Options;
  }
}

export {};
