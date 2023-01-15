package keeper_test

import (
	"context"
	"testing"

	keepertest "blognitum/testutil/keeper"
	"blognitum/x/blognitum/keeper"
	"blognitum/x/blognitum/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.BlognitumKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
