export enum ASTKind {
  PROGRAM = 'program',
  CLASS = 'class',
  TRAIT = 'trait',
  METHOD = 'method',
  FUNCTION = 'function',
  CLOSURE = 'closure',
  ARROW_FUNCTION = 'arrowfunc',
  ENTRY = 'entry',
  ASSIGN = 'assign',
  ARRAY = 'array',
  PROPERTY_LOOKUP = 'propertylookup',
  STATIC_LOOKUP = 'staticlookup',
  LABEL = 'label',
  BIN = 'bin',
  IF = 'if',
  VARIABLE = 'variable',
  IDENTIFIER = 'identifier',
  CATCH = 'catch',
  SWITCH = 'switch',
  FOR = 'for',
  WHILE = 'while',
  DO = 'do',
  RETURN_IF = 'retif',
  BOOLEAN = 'boolean',
  STRING = 'string',
  NUMBER = 'number',
  MAGICAL_DEFINE = 'magic',
  NAME = 'name',
  HERE_DOC = 'nowdoc',
  CAST = 'cast',
  TYPE_REFERENCE = 'typereference',
  NULL = 'nullkeyword',
  HALT = 'halt',
  CASE = 'case',
  CLONE = 'clone',
  CONSTANT = 'constant',
  CONTINUE = 'continue',
  DECLARE = 'declare',
  EXIT = 'exit',
  EMPTY = 'empty',
  EVAL = 'eval',
  GLOBAL = 'global',
  INCLUDE = 'include',
  TRAIT_PRECEDENCE = 'traitprecedence',
  TRAIT_ALIAS = 'traitalias',
  INTERFACE = 'interface',
  ISSET = 'isset',
  LIST = 'list',
  NAMESPACE = 'namespace',
  NEW = 'new',
  RETURN = 'return',
  STATIC = 'static',
  THROW = 'throw',
  UNSET = 'unset',
  USE = 'usegroup',
  YIELD = 'yield',
  YIELD_FROM = 'yieldfrom',
};
