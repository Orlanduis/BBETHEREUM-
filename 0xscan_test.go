package xscan

import (
	"context"
	"testing"
)

func TestGetErc20TokenTransfers(t *testing.T) {
	client := NewClient(BscOpts, "")

	_, _, err := client.GetErc20TokenTransfers(context.Background(), "0x2491b230BaA58200B0C2857eaB1bFD523bE345b4", nil)
	if err != nil {
		t.Errorf("GetErc20TokenTransfers error: %v", err)
	}
}
