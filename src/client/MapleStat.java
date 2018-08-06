package client;

import constants.GameConstants;

public enum MapleStat {
    SKIN(0x1),
    FACE(0x2),
    HAIR(0x4),
    LEVEL(0x10),
    JOB(0x20),
    STR(0x40),
    DEX(0x80),
    INT(0x100),
    LUK(0x200),
    HP(0x400),
    MAXHP(0x800),
    MP(0x1000),
    MAXMP(0x2000),
    AVAILABLEAP(0x4000),
    AVAILABLESP(0x8000),
    EXP(0x10000),
    FAME(0x20000),
    MESO(0x40000),
    PET(0x180008), //0x8 + 0x80000 + 0x100000 <-- these removed in MSEA
    GACHAPONEXP(0x200000),
    FATIGUE(GameConstants.GMS ? 0x400000 : 0x100000),
    CHARISMA(GameConstants.GMS ? 0x800000 : 0x200000),
    INSIGHT(GameConstants.GMS ? 0x1000000 : 0x400000),
    WILL(GameConstants.GMS ? 0x2000000 : 0x800000),
    CRAFT(GameConstants.GMS ? 0x4000000 : 0x1000000),
    SENSE(GameConstants.GMS ? 0x8000000 : 0x2000000),
    CHARM(GameConstants.GMS ? 0x10000000 : 0x4000000),
    TRAIT_LIMIT(GameConstants.GMS ? 0x20000000 : 0x8000000),
    BATTLE_EXP(GameConstants.GMS ? 0x40000000 : 0x10000000),
    BATTLE_RANK(GameConstants.GMS ? 0x80000000L : 0x20000000),
    BATTLE_POINTS(GameConstants.GMS ? 0x100000000L : 0x40000000),
    ICE_GAGE(GameConstants.GMS ? 0x200000000L : 0x80000000L),
    VIRTUE(GameConstants.GMS ? 0x400000000L : 0x100000000L);

    private final long i;

    private MapleStat(long i) {
        this.i = i;
    }

    public long getValue() {
        return i;
    }

    public static final MapleStat getByValue(final long value) {
        for (final MapleStat stat : MapleStat.values()) {
            if (stat.i == value) {
                return stat;
            }
        }
        return null;
    }

    public static enum Temp {
        STR(0x1),
        DEX(0x2),
        INT(0x4),
        LUK(0x8),
        WATK(0x10),
        WDEF(0x20),
        MATK(0x40),
        MDEF(0x80),
        ACC(0x100),
        AVOID(0x200),
        SPEED(0x400),
        JUMP(0x800);

        private final int i;

        private Temp(int i) {
            this.i = i;
        }

        public int getValue() {
            return i;
        }
    }
}
