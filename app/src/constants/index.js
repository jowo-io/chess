export const PIECE_FEN_TYPES = {
  blackRook: "r",
  blackKnight: "n",
  blackBishop: "b",
  blackQueen: "q",
  blackKing: "k",
  blackPawn: "p",
  blackMoon: "m",
  blackGrave: "g",
  blackJester: "j",
  blackArchbishop: "a",
  blackChancellor: "c",
  blackRose: "o",
  whiteRook: "R",
  whiteKnight: "N",
  whiteBishop: "B",
  whiteQueen: "Q",
  whiteKing: "K",
  whitePawn: "P",
  whiteMoon: "M",
  whiteGrave: "G",
  whiteJester: "J",
  whiteArchbishop: "A",
  whiteChancellor: "C",
  whiteRose: "O",
};

export const PIECES = {
  ROOK: "ROOK",
  KNIGHT: "KNIGHT",
  BISHOP: "BISHOP",
  QUEEN: "QUEEN",
  KING: "KING",
  PAWN: "PAWN",
  MOON: "MOON",
  GRAVE: "GRAVE",
  JESTER: "JESTER",
  ARCHBISHOP: "ARCHBISHOP",
  CHANCELLOR: "CHANCELLOR",
  ROSE: "ROSE",
};

export const COLOURS = {
  BLACK: "BLACK",
  WHITE: "WHITE",
};

export const PAWN_STATES = {
  JUST_LEAPED: "JUST_LEAPED",
  CAN_LEAP: "CAN_LEAP",
  CANT_LEAP: "CANT_LEAP",
};

export const FEN_TO_PIECE_MAP = {
  [PIECE_FEN_TYPES.blackRook]: {
    FEN: PIECE_FEN_TYPES.blackRook,
    PIECE: PIECES.ROOK,
    COLOUR: COLOURS.BLACK,
    CASTLEABLE: true,
  },
  [PIECE_FEN_TYPES.blackKnight]: {
    FEN: PIECE_FEN_TYPES.blackKnight,
    PIECE: PIECES.KNIGHT,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackBishop]: {
    FEN: PIECE_FEN_TYPES.blackBishop,
    PIECE: PIECES.BISHOP,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackQueen]: {
    FEN: PIECE_FEN_TYPES.blackQueen,
    PIECE: PIECES.QUEEN,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackKing]: {
    FEN: PIECE_FEN_TYPES.blackKing,
    PIECE: PIECES.KING,
    COLOUR: COLOURS.BLACK,
    CASTLEABLE: true,
  },
  [PIECE_FEN_TYPES.blackPawn]: {
    FEN: PIECE_FEN_TYPES.blackPawn,
    PIECE: PIECES.PAWN,
    COLOUR: COLOURS.BLACK,
    ENPASSANTABLE: PAWN_STATES.CAN_LEAP,
  },
  [PIECE_FEN_TYPES.blackMoon]: {
    FEN: PIECE_FEN_TYPES.blackMoon,
    PIECE: PIECES.MOON,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackGrave]: {
    FEN: PIECE_FEN_TYPES.blackGrave,
    PIECE: PIECES.GRAVE,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackJester]: {
    FEN: PIECE_FEN_TYPES.blackJester,
    PIECE: PIECES.JESTER,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackArchbishop]: {
    FEN: PIECE_FEN_TYPES.blackArchbishop,
    PIECE: PIECES.ARCHBISHOP,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackChancellor]: {
    FEN: PIECE_FEN_TYPES.blackChancellor,
    PIECE: PIECES.CHANCELLOR,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackRose]: {
    FEN: PIECE_FEN_TYPES.blackRose,
    PIECE: PIECES.ROSE,
    COLOUR: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.whiteRook]: {
    FEN: PIECE_FEN_TYPES.whiteRook,
    PIECE: PIECES.ROOK,
    COLOUR: COLOURS.WHITE,
    CASTLEABLE: true,
  },
  [PIECE_FEN_TYPES.whiteKnight]: {
    FEN: PIECE_FEN_TYPES.whiteKnight,
    PIECE: PIECES.KNIGHT,
    COLOUR: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteBishop]: {
    FEN: PIECE_FEN_TYPES.whiteBishop,
    PIECE: PIECES.BISHOP,
    COLOUR: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteQueen]: {
    FEN: PIECE_FEN_TYPES.whiteQueen,
    PIECE: PIECES.QUEEN,
    COLOUR: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteKing]: {
    FEN: PIECE_FEN_TYPES.whiteKing,
    PIECE: PIECES.KING,
    COLOUR: COLOURS.WHITE,
    CASTLEABLE: true,
  },
  [PIECE_FEN_TYPES.whitePawn]: {
    FEN: PIECE_FEN_TYPES.whitePawn,
    PIECE: PIECES.PAWN,
    COLOUR: COLOURS.WHITE,
    ENPASSANTABLE: PAWN_STATES.CAN_LEAP,
  },
  [PIECE_FEN_TYPES.whiteMoon]: {
    FEN: PIECE_FEN_TYPES.whiteMoon,
    PIECE: PIECES.MOON,
    COLOUR: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteGrave]: {
    FEN: PIECE_FEN_TYPES.whiteGrave,
    PIECE: PIECES.GRAVE,
    COLOUR: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteJester]: {
    FEN: PIECE_FEN_TYPES.whiteJester,
    PIECE: PIECES.JESTER,
    COLOUR: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteArchbishop]: {
    FEN: PIECE_FEN_TYPES.whiteArchbishop,
    PIECE: PIECES.ARCHBISHOP,
    COLOUR: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteChancellor]: {
    FEN: PIECE_FEN_TYPES.whiteChancellor,
    PIECE: PIECES.CHANCELLOR,
    COLOUR: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteRose]: {
    FEN: PIECE_FEN_TYPES.whiteRose,
    PIECE: PIECES.ROSE,
    COLOUR: COLOURS.WHITE,
  },
};
