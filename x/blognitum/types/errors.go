package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/blognitum module sentinel errors
var (
	ErrSample     = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrCommentOld = sdkerrors.Register(ModuleName, 1300, "")
	ErrID         = sdkerrors.Register(ModuleName, 1400, "")
)
